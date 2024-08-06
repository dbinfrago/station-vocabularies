import { NamedNode } from 'n3'
import lodash from 'lodash'
import { dbStationsCreator, dctCreator, netexFixedObjectsBaseIri, netexFixedObjectsCreator } from '../uris.js'
import { EnumClass, enumValuePrefix } from '../enums/_util.js'

export type XsdType = 'string' | 'boolean' | 'integer' | 'positiveInteger' | 'decimal' | 'float' | 'anyURI' | 'language'

export interface DatatypeRange { xsdType: XsdType }
export interface EnumRange { enum: EnumClass }
export interface ObjectRange { netexClassId: string }

export type Range = DatatypeRange | EnumRange | ObjectRange

export interface ParserConfig {
  type: 'IRI' | XsdType
  format: { reference: string } | { template: string }
}

export interface NetexAttribute {
  name: string
  isRef: boolean
}

export const simpleAttribute = (name: string): NetexAttribute[] => ([{ name, isRef: false }])

export interface Property {
  id: string
  uri: NamedNode
  label: string
  range: Range
  namespace: 'netex' | 'db-stations'
  isKey: boolean
  description: string
  sameAs: NamedNode[]
  subPropertyOf: NamedNode[]
  netexAttributes: NetexAttribute[]
  parserConfigs: ParserConfig[]
}

export type PropertyOptions = Partial<Omit<Property, 'id' | 'range' | 'uri'>>

export const defaultParserConfigs = (netexAttributes: NetexAttribute[], range: Range): ParserConfig[] => {
  if ('xsdType' in range) return netexAttributes.map(({ name }) => ({ type: range.xsdType, format: { reference: name } }))
  if ('enum' in range) {
    return netexAttributes.map(({ name }) => ({
      type: 'IRI',
      format: { template: `${netexFixedObjectsBaseIri}${enumValuePrefix(range.enum.id)}{tokenize(${name}/text(), ' ')}` }
    }))
  }

  return netexAttributes.map(({ name, isRef }) => (
    { type: 'IRI', format: { reference: `${name}/encode-for-uri(${isRef ? '@ref' : '@id'})` } }
  ))
}

export const createProperty = (id: string, range: Range, options?: PropertyOptions): Property => {
  const label = options?.label ?? lodash.capitalize(lodash.startCase(id))
  const description = options?.description ?? `${label} of entity.`
  const namespace = options?.namespace ?? 'netex'
  const netexAttributes = options?.netexAttributes ?? simpleAttribute(lodash.upperFirst(id))

  return {
    id,
    uri: (namespace === 'netex') ? netexFixedObjectsCreator(id) : dbStationsCreator(id),
    label,
    description,
    namespace,
    isKey: options?.isKey ?? false,
    range,
    sameAs: options?.sameAs ?? [],
    subPropertyOf: options?.subPropertyOf ?? [],
    netexAttributes,
    parserConfigs: options?.parserConfigs ?? defaultParserConfigs(netexAttributes, range)
  }
}

export const createStringProperty = (id: string, options?: PropertyOptions): Property => createProperty(id, { xsdType: 'string' }, options)
export const createBooleanProperty = (id: string, options?: PropertyOptions): Property => createProperty(id, { xsdType: 'boolean' }, options)
export const createIntegerProperty = (id: string, options?: PropertyOptions): Property => createProperty(id, { xsdType: 'integer' }, options)
export const createPositiveIntegerProperty = (id: string, options?: PropertyOptions): Property => createProperty(id, { xsdType: 'positiveInteger' }, options)
export const createDecimalProperty = (id: string, options?: PropertyOptions): Property => createProperty(id, { xsdType: 'decimal' }, options)
export const createFloatProperty = (id: string, options?: PropertyOptions): Property => createProperty(id, { xsdType: 'float' }, options)
export const createIdProperty = (id: string, options?: PropertyOptions): Property => createProperty(id, { xsdType: 'string' }, {
  subPropertyOf: [dctCreator('identifier')],
  ...(options ?? {})
})
