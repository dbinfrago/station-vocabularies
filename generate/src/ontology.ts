import { DataFactory, Writer } from 'n3'
import lodash from 'lodash'
import { dbStationsCreator, netexFixedObjectsCreator, owlCreator, prefixes, rdfCreator, rdfsCreator, schemaCreator, statusCreator, xsdCreator } from './uris.js'
import classMap from './classes/index.js'
import propertyMap from './properties/index.js'
import enumMap from './enums/index.js'

const { literal } = DataFactory

export const sameAs = owlCreator('sameAs')
export const a = rdfCreator('type')
export const rdfsClass = rdfsCreator('Class')
export const subClassOf = rdfsCreator('subClassOf')
export const subPropertyOf = rdfsCreator('subPropertyOf')
export const rdfsRange = rdfsCreator('range')
export const label = rdfsCreator('label')
export const name = schemaCreator('name')
export const comment = rdfsCreator('comment')
export const termStatus = statusCreator('term_status')
export const unstable = literal('unstable', 'en')

const generateOntology = async (namespace: 'netex' | 'db-stations'): Promise<string> => {
  const allClasses = lodash.sortBy(Object.values(classMap), c => c.id)
  const namespaceClasses = allClasses.filter(c => c.namespace === namespace)
  const properties = lodash.sortBy(Object.values(propertyMap).filter(p => p.namespace === namespace), c => c.id)
  const enums = lodash.sortBy(Object.values(enumMap).filter(e => e.namespace === namespace), e => e.id)

  return await new Promise((resolve, reject) => {
    const writer = new Writer({ prefixes })

    // todo: disjunctive statements
    // todo: ontology metadata

    // classes
    for (const c of namespaceClasses) {
      writer.addQuad(c.uri, a, rdfsClass)
      writer.addQuad(c.uri, termStatus, unstable)
      writer.addQuad(c.uri, label, literal(c.label, 'en'))
      writer.addQuad(c.uri, name, literal(c.label, 'en'))
      if (c.description !== undefined) writer.addQuad(c.uri, comment, literal(c.description, 'en'))
      for (const uri of c.sameAs) { writer.addQuad(c.uri, sameAs, uri) }
      for (const uri of c.subClassOf) { writer.addQuad(c.uri, subClassOf, uri) }
      for (const property of c.properties.filter(p => p.property.isKey)) {
        writer.addQuad(c.uri, owlCreator('hasKey'), writer.blank([
          { predicate: rdfCreator('first'), object: property.property.uri },
          { predicate: rdfCreator('rest'), object: rdfCreator('nil') }
        ]))
      }
    }

    // properties
    for (const p of properties) {
      const propertyType = ('xsdType' in p.range) ? owlCreator('DatatypeProperty') : owlCreator('ObjectProperty') // todo: is this assumption correct?
      const range = ('xsdType' in p.range) ? xsdCreator(p.range.xsdType) : (('enum' in p.range) ? p.range.enum.uri : netexFixedObjectsCreator(p.range.netexClassId)) // todo: is this always correct or should 'rangeIncludes' sometimes be used instead?
      writer.addQuad(p.uri, a, propertyType)
      writer.addQuad(p.uri, termStatus, unstable)
      writer.addQuad(p.uri, label, literal(p.label, 'en'))
      writer.addQuad(p.uri, name, literal(p.label, 'en'))
      writer.addQuad(p.uri, comment, literal(p.description, 'en'))
      writer.addQuad(p.uri, rdfsRange, range)
      for (const uri of p.sameAs) { writer.addQuad(p.uri, sameAs, uri) }
      for (const uri of p.subPropertyOf) { writer.addQuad(p.uri, subPropertyOf, uri) }
      for (const domain of allClasses.filter(c => c.properties.some(classProperty => p.uri.equals(classProperty.property.uri)))) {
        writer.addQuad(p.uri, schemaCreator('domainIncludes'), domain.uri)
      }
      for (const profileDomain of allClasses.filter(c => c.dbStationsProfile && c.properties.some(classProperty => classProperty.dbStationsProfile && p.uri.equals(classProperty.property.uri)))) {
        writer.addQuad(p.uri, dbStationsCreator('domainInDBStationsProfile'), profileDomain.uri)
      }
    }

    // enums
    for (const e of enums) {
      writer.addQuad(e.uri, a, rdfsClass)
      writer.addQuad(e.uri, termStatus, unstable)
      writer.addQuad(e.uri, label, literal(e.label, 'en'))
      writer.addQuad(e.uri, name, literal(e.label, 'en'))
      if (e.description !== undefined) writer.addQuad(e.uri, comment, literal(e.description, 'en'))
      for (const uri of e.sameAs) { writer.addQuad(e.uri, sameAs, uri) }
      for (const uri of e.subClassOf) { writer.addQuad(e.uri, subClassOf, uri) }

      const values = lodash.sortBy(e.values, v => v.id)
      for (const v of values) {
        writer.addQuad(v.uri, a, e.uri)
        writer.addQuad(v.uri, termStatus, unstable)
        writer.addQuad(v.uri, label, literal(v.label, 'en'))
        writer.addQuad(v.uri, name, literal(v.label, 'en'))
        if (v.description !== undefined) writer.addQuad(v.uri, comment, literal(v.description, 'en'))
        for (const uri of v.sameAs) { writer.addQuad(v.uri, sameAs, uri) }
      }
    }

    writer.end((error, result) => {
      if (Boolean(error) || result === undefined) reject(error ?? new Error('unexpected error, missing result'))
      resolve(result)
    })
  })
}

export default generateOntology
