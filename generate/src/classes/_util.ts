import { NamedNode } from 'n3'
import lodash from 'lodash'
import { dbStationsCreator, netexFixedObjectsCreator } from '../uris.js'
import { Property } from '../properties/_util.js'

export interface PropertyAssertion {
  property: Property

  // flag indicating if a property on the given class is part of the db stations
  // profile. this information is used for db internal q.a. (could be taken out
  // later for clearer separation of concerns, if this ontology is adopted by
  // others)
  dbStationsProfile: boolean
}

export type PropertyAssertionOptions = Partial<Omit<PropertyAssertion, 'property'>>

export const createPropertyAssertion = (property: Property, options?: PropertyAssertionOptions): PropertyAssertion => {
  return {
    property,
    dbStationsProfile: options?.dbStationsProfile ?? true
  }
}

export interface Class {
  id: string
  uri: NamedNode
  label: string
  properties: PropertyAssertion[]
  namespace: 'netex' | 'db-stations'
  description?: string
  sameAs: NamedNode[]
  subClassOf: NamedNode[]

  // flag indicating if a class is part of the db stations profile. this
  // information is used for db internal q.a. (could be taken out later for
  // clearer separation of concerns, if this ontology is adopted by others)
  dbStationsProfile: boolean
}

export type ClassOptions = Partial<Omit<Class, 'id' | 'uri'>>

export const createClass = (id: string, properties: PropertyAssertion[], options?: ClassOptions): Class => {
  const label = options?.label ?? lodash.capitalize(lodash.startCase(id))
  const namespace = options?.namespace ?? 'netex'
  return {
    id,
    uri: (namespace === 'netex') ? netexFixedObjectsCreator(id) : dbStationsCreator(id),
    label,
    properties,
    namespace,
    description: options?.description,
    sameAs: options?.sameAs ?? [],
    subClassOf: options?.subClassOf ?? [],
    dbStationsProfile: options?.dbStationsProfile ?? true
  }
}
