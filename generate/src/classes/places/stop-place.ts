import properties from '../../properties/index.js'
import { netexFixedObjectsCreator, transmodelFacilitiesCreator } from '../../uris.js'
import { Class, createClass, createPropertyAssertion as a } from '../_util.js'

export const StopPlace: Class = createClass('StopPlace', [
  // still missing:
  // - version, … (attributes)
  // - airSubmode, busSubmode, coachSubmode, …
  // - alternativeNames
  // - alternativeTexts
  // - gml:MultiSurface
  // - gml:Polygon
  // - infoLinks
  // - modeOfOperation/alternativeModeOfOperation/vehiclePooling/vehicleRental/…
  // - operatingOrganisationView
  // - otherTransportModes
  // - presentation
  // - topographicPlaceView
  // - validBetween
  // - validityConditions

  a(properties.access, { dbStationsProfile: false }),
  a(properties.accessibilityAssessment),
  a(properties.accessMode),
  a(properties.accessSpace),
  a(properties.additionalTopographicPlace, { dbStationsProfile: false }),
  a(properties.adjacentSite, { dbStationsProfile: false }),
  a(properties.allAreasWheelchairAccessible, { dbStationsProfile: false }),
  a(properties.atCentre, { dbStationsProfile: false }),
  a(properties.authority, { dbStationsProfile: false }),
  a(properties.borderCrossing, { dbStationsProfile: false }),
  a(properties.branding, { dbStationsProfile: false }),
  a(properties.centroid),
  a(properties.containedInPlace, { dbStationsProfile: false }),
  a(properties.covered, { dbStationsProfile: false }),
  a(properties.crossRoad, { dbStationsProfile: false }),
  a(properties.description, { dbStationsProfile: false }),
  a(properties.entrance),
  a(properties.equipmentPlace),
  a(properties.evaId),
  a(properties.facility, { dbStationsProfile: false }),
  a(properties.gated),
  a(properties.id),
  a(properties.ifoptStopId),
  a(properties.image),
  a(properties.landmark, { dbStationsProfile: false }),
  a(properties.level),
  a(properties.lighting),
  a(properties.limitedUse, { dbStationsProfile: false }),
  a(properties.locale),
  a(properties.localService, { dbStationsProfile: false }),
  a(properties.mainTerminusForPlace, { dbStationsProfile: false }),
  a(properties.member, { dbStationsProfile: false }),
  a(properties.name),
  a(properties.nameSuffix, { dbStationsProfile: false }),
  a(properties.navigationPath, { dbStationsProfile: false }),
  a(properties.operator, { dbStationsProfile: false }),
  a(properties.organisation),
  a(properties.parentSite, { dbStationsProfile: false }),
  a(properties.parentZone, { dbStationsProfile: false }),
  a(properties.pathJunction, { dbStationsProfile: false }),
  a(properties.pathLink, { dbStationsProfile: false }),
  a(properties.personCapacity, { dbStationsProfile: false }),
  a(properties.placeEquipment),
  a(properties.placeType, { dbStationsProfile: false }),
  a(properties.postalAddress),
  a(properties.privateCode),
  a(properties.projection, { dbStationsProfile: false }),
  a(properties.publicCode, { dbStationsProfile: false }),
  a(properties.publicUse),
  a(properties.purposeOfGrouping, { dbStationsProfile: false }),
  a(properties.quay),
  a(properties.ril100Id),
  a(properties.roadAddress, { dbStationsProfile: false }),
  a(properties.servedPlace, { dbStationsProfile: false }),
  a(properties.shortName, { dbStationsProfile: false }),
  a(properties.siteType),
  a(properties.stadaId),
  a(properties.stopPlaceType, { dbStationsProfile: false }),
  a(properties.stopPlaceWeight, { dbStationsProfile: false }),
  a(properties.tariffZone, { dbStationsProfile: false }),
  a(properties.topographicPlace, { dbStationsProfile: false }),
  a(properties.transportMode),
  a(properties.transportOrganisation, { dbStationsProfile: false }),
  a(properties.type, { dbStationsProfile: false }),
  a(properties.unlocalisedEquipment),
  a(properties.url),
  a(properties.vehicleStoppingPlace, { dbStationsProfile: false }),
  a(properties.weighting, { dbStationsProfile: false })
], { sameAs: [transmodelFacilitiesCreator('StopPlace')], subClassOf: [netexFixedObjectsCreator('Site')] })
