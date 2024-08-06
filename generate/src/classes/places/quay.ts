import properties from '../../properties/index.js'
import { netexFixedObjectsCreator, transmodelFacilitiesCreator } from '../../uris.js'
import { Class, createClass, createPropertyAssertion as a } from '../_util.js'

export const Quay: Class = createClass('Quay', [
  // still missing:
  // - version, … (attributes)
  // - airSubmode, busSubmode, coachSubmode, …
  // - alternativeNames
  // - alternativeTexts
  // - destinations
  // - gml:MultiSurface
  // - gml:Polygon
  // - infoLinks
  // - keyList
  // - modeOfOperation/alternativeModeOfOperation/vehiclePooling/vehicleRental/…
  // - otherTransportModes
  // - presentation
  // - validBetween
  // - validityConditions

  a(properties.accessibilityAssessment),
  a(properties.accessMode, { dbStationsProfile: false }),
  a(properties.alightingUse),
  a(properties.allAreasWheelchairAccessible, { dbStationsProfile: false }),
  a(properties.boardingPosition, { dbStationsProfile: false }),
  a(properties.boardingUse),
  a(properties.branding, { dbStationsProfile: false }),
  a(properties.centroid, { dbStationsProfile: false }),
  a(properties.checkConstraint, { dbStationsProfile: false }),
  a(properties.classOfUse, { dbStationsProfile: false }),
  a(properties.compassBearing, { dbStationsProfile: false }),
  a(properties.compassOctant, { dbStationsProfile: false }),
  a(properties.covered),
  a(properties.crossRoad, { dbStationsProfile: false }),
  a(properties.description, { dbStationsProfile: false }),
  a(properties.edgeToTrackCenterDistance),
  a(properties.entrance),
  a(properties.equipmentPlace),
  a(properties.facility, { dbStationsProfile: false }),
  a(properties.gated),
  a(properties.id),
  a(properties.image, { dbStationsProfile: false }),
  a(properties.label, { dbStationsProfile: false }),
  a(properties.landmark, { dbStationsProfile: false }),
  a(properties.length),
  a(properties.level),
  a(properties.lighting),
  a(properties.localService, { dbStationsProfile: false }),
  a(properties.member, { dbStationsProfile: false }),
  a(properties.name),
  a(properties.nameSuffix, { dbStationsProfile: false }),
  a(properties.parentQuay),
  a(properties.parentZone, { dbStationsProfile: false }),
  a(properties.personCapacity, { dbStationsProfile: false }),
  a(properties.placeEquipment),
  a(properties.placeType, { dbStationsProfile: false }),
  a(properties.plateCode),
  a(properties.platformHeight),
  a(properties.postalAddress, { dbStationsProfile: false }),
  a(properties.privateCode),
  a(properties.projection, { dbStationsProfile: false }),
  a(properties.publicCode, { dbStationsProfile: false }),
  a(properties.publicUse),
  a(properties.purposeOfGrouping, { dbStationsProfile: false }),
  a(properties.quayType),
  a(properties.roadAddress, { dbStationsProfile: false }),
  a(properties.shortCode, { dbStationsProfile: false }),
  a(properties.shortName, { dbStationsProfile: false }),
  a(properties.site),
  a(properties.tariffZone, { dbStationsProfile: false }),
  a(properties.transportMode),
  a(properties.type, { dbStationsProfile: false }),
  a(properties.url, { dbStationsProfile: false }),
  a(properties.width)
], { sameAs: [transmodelFacilitiesCreator('Quay')], subClassOf: [netexFixedObjectsCreator('Site')] })
