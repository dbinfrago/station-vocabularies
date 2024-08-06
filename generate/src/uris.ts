import { DataFactory, NamedNode, Prefixes } from 'n3'
const { namedNode } = DataFactory

export const nodeCreator = (baseIri: string) => (entityId: string): NamedNode => namedNode([baseIri, encodeURIComponent(entityId)].join(''))

const owlBaseIri = 'http://www.w3.org/2002/07/owl#'
const rdfBaseIri = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'
const rdfsBaseIri = 'http://www.w3.org/2000/01/rdf-schema#'
const xsdBaseIri = 'http://www.w3.org/2001/XMLSchema#'

const dctBaseIri = 'http://purl.org/dc/terms/'
const foafBaseIri = 'http://xmlns.com/foaf/0.1/'
const statusBaseIri = 'http://www.w3.org/2003/06/sw-vocab-status/ns#'
const schemaBaseIri = 'http://schema.org/'
const wdtBaseIri = 'http://www.wikidata.org/prop/direct/'
const transmodelFacilitiesBaseIri = 'https://w3id.org/transmodel/facilities#'
const transmodelOrganisationsBaseIri = 'https://w3id.org/transmodel/organisations#'

const rmlBaseIri = 'http://semweb.mmlab.be/ns/rml#'
const rrBaseIri = 'http://www.w3.org/ns/r2rml#'
const qlBaseIri = 'http://semweb.mmlab.be/ns/ql#'

export const netexFixedObjectsBaseIri = 'https://lod.bahnhof.de/vocabulary/netex/'
export const dbStationsBaseIri = 'https://lod.bahnhof.de/vocabulary/db/'

export const owlCreator = nodeCreator(owlBaseIri)
export const rdfCreator = nodeCreator(rdfBaseIri)
export const rdfsCreator = nodeCreator(rdfsBaseIri)
export const xsdCreator = nodeCreator(xsdBaseIri)

export const dctCreator = nodeCreator(dctBaseIri)
export const foafCreator = nodeCreator(foafBaseIri)
export const statusCreator = nodeCreator(statusBaseIri)
export const schemaCreator = nodeCreator(schemaBaseIri)
export const wdtCreator = nodeCreator(wdtBaseIri)
export const transmodelFacilitiesCreator = nodeCreator(transmodelFacilitiesBaseIri)
export const transmodelOrganisationsCreator = nodeCreator(transmodelOrganisationsBaseIri)

export const rmlCreator = nodeCreator(rmlBaseIri)
export const rrCreator = nodeCreator(rrBaseIri)
export const qlCreator = nodeCreator(qlBaseIri)

export const netexFixedObjectsCreator = nodeCreator(netexFixedObjectsBaseIri)
export const dbStationsCreator = nodeCreator(dbStationsBaseIri)

export const prefixes: Prefixes<string> = {
  owl: owlBaseIri,
  rdf: rdfBaseIri,
  rdfs: rdfsBaseIri,
  xsd: xsdBaseIri,
  dct: dctBaseIri,
  foaf: foafBaseIri,
  status: statusBaseIri,
  schema: schemaBaseIri,
  wdt: wdtBaseIri,
  tmfac: transmodelFacilitiesBaseIri,
  tmorg: transmodelOrganisationsBaseIri,
  rml: rmlBaseIri,
  rr: rrBaseIri,
  ql: qlBaseIri,
  netex: netexFixedObjectsBaseIri,
  bahnhof: dbStationsBaseIri
}
