import { BlankTriple, DataFactory, Writer } from 'n3'
import lodash from 'lodash'
import { prefixes, qlCreator, rdfCreator, rmlCreator, rrCreator, xsdCreator } from './uris.js'
import classMap from './classes/index.js'
import { ParserConfig } from './properties/_util.js'

const { literal } = DataFactory

const inputFileName = 'input.xml' // unfortunately, hard-coding a file name seems to be required in RML

export const a = rdfCreator('type')

const objectDefinitionForConfig = (config: ParserConfig): BlankTriple[] => {
  const dataTypeDefinitions: BlankTriple[] = (config.type === 'IRI')
    ? []
    : [{
        predicate: rrCreator('datatype'),
        object: xsdCreator(config.type)
      }]

  const termTypeDefinition: BlankTriple = {
    predicate: rrCreator('termType'),
    object: (config.type === 'IRI') ? rrCreator('IRI') : rrCreator('Literal')
  }

  const contentDefinition: BlankTriple = ('reference' in config.format)
    ? {
        predicate: rmlCreator('reference'), object: literal(config.format.reference)
      }
    : {
        predicate: rrCreator('template'), object: literal(config.format.template)
      }

  return [
    ...dataTypeDefinitions,
    termTypeDefinition,
    contentDefinition
  ]
}

const generateRml = async (): Promise<string> => {
  const classes = lodash.sortBy(Object.values(classMap), c => c.id)

  return await new Promise((resolve, reject) => {
    const writer = new Writer({ prefixes })

    for (const c of classes) {
      const mapNode = writer.blank(a, rrCreator('TriplesMap'))
      writer.addQuad(mapNode, rmlCreator('logicalSource'), writer.blank([
        { predicate: rmlCreator('source'), object: literal(inputFileName) },
        { predicate: rmlCreator('referenceFormulation'), object: qlCreator('XPath') },
        { predicate: rmlCreator('iterator'), object: literal(`//${c.id}`) }
      ]))

      writer.addQuad(mapNode, rrCreator('subjectMap'), writer.blank([
        { predicate: rmlCreator('reference'), object: literal('encode-for-uri(@id)') },
        ...[c.uri, ...c.sameAs, ...c.subClassOf].map(classUri => ({ predicate: rrCreator('class'), object: classUri }))
      ]))

      for (const p of c.properties) {
        for (const pUri of [p.property.uri, ...p.property.sameAs, ...p.property.subPropertyOf]) {
          for (const config of p.property.parserConfigs) {
            writer.addQuad(mapNode, rrCreator('predicateObjectMap'), writer.blank([
              { predicate: rrCreator('predicate'), object: pUri },
              {
                predicate: rrCreator('objectMap'),
                object: writer.blank(objectDefinitionForConfig(config))
              }
            ]))
          }
        }
      }
    }

    writer.end((error, result) => {
      if (Boolean(error) || result === undefined) reject(error ?? new Error('unexpected error, missing result'))
      resolve(result)
    })
  })
}

export default generateRml
