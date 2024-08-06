import properties from '../../properties/index.js'
import { Class, createClass, createPropertyAssertion as a } from '../_util.js'

export const TopographicPlace: Class = createClass('TopographicPlace', [
  // still missing:
  // - version, … (attributes)
  // - validityConditions
  // - validBetween
  // - alternativeTexts
  a(properties.branding, { dbStationsProfile: false }),
  a(properties.name, { dbStationsProfile: false }),
  a(properties.shortName, { dbStationsProfile: false }),
  a(properties.description, { dbStationsProfile: false }),
  a(properties.purposeOfGrouping, { dbStationsProfile: false }),
  a(properties.privateCode, { dbStationsProfile: false }),
  // - infoLinks
  a(properties.member, { dbStationsProfile: false }),
  a(properties.type, { dbStationsProfile: false }),
  a(properties.centroid, { dbStationsProfile: false }),
  // - gml:MultiSurface
  // - gml:Polygon
  a(properties.projection, { dbStationsProfile: false }),
  a(properties.parentZone, { dbStationsProfile: false }),
  a(properties.placeType, { dbStationsProfile: false }),
  // - isoCode
  // - descriptor
  // - alternativeDescriptors
  // - topographicPlaceType
  // - placeCentre
  // - postCode
  // - country
  // - otherCountry
  // - parentTopographicPlace
  // - adjacentPlace
  a(properties.containedIn, { dbStationsProfile: false }),
  a(properties.access, { dbStationsProfile: false })
], { dbStationsProfile: false })
