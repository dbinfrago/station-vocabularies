import { NamedNode } from 'n3'
import lodash from 'lodash'
import { dbStationsCreator, netexFixedObjectsCreator } from '../uris.js'

export interface EnumValue {
  id: string
  uri: NamedNode
  label: string
  description?: string
  sameAs: NamedNode[]
}

export interface EnumClass {
  id: string
  uri: NamedNode
  label: string
  values: EnumValue[]
  namespace: 'netex' | 'db-stations'
  description?: string
  sameAs: NamedNode[]
  subClassOf: NamedNode[]
}

export type EnumClassOptions = Partial<Omit<EnumClass, 'id' | 'values' | 'uri'>>
export type EnumValueArgument = Pick<EnumValue, 'id'> & Partial<Omit<EnumValue, 'id' | 'uri'>>

export const enumValuePrefix = (enumId: string): string => `${enumId}-`

export const createEnum = (id: string, values: EnumValueArgument[], options?: EnumClassOptions): EnumClass => {
  const classLabel = options?.label ?? lodash.capitalize(lodash.startCase(id))
  const namespace = options?.namespace ?? 'netex'
  return {
    id,
    uri: (namespace === 'netex') ? netexFixedObjectsCreator(id) : dbStationsCreator(id),
    label: classLabel,
    values: values.map(value => {
      const valueLabel = value.label ?? lodash.capitalize(lodash.startCase(value.id))
      const valueDescription = value.description ?? `${classLabel} '${valueLabel}'`
      const slug = `${enumValuePrefix(id)}${value.id}`
      return {
        id: value.id,
        uri: (namespace === 'netex') ? netexFixedObjectsCreator(slug) : dbStationsCreator(slug),
        label: valueLabel,
        description: valueDescription,
        sameAs: value?.sameAs ?? []
      }
    }),
    namespace,
    description: options?.description,
    sameAs: options?.sameAs ?? [],
    subClassOf: options?.subClassOf ?? []
  }
}
