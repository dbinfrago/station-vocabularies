import enums from '../enums/index.js'
import { foafCreator, schemaCreator, transmodelFacilitiesCreator, wdtCreator } from '../uris.js'
import { Property, createBooleanProperty, createDecimalProperty, createFloatProperty, createIdProperty, createIntegerProperty, createPositiveIntegerProperty, createProperty, createStringProperty, simpleAttribute } from './_util.js'

// todo: additional sameAs, descriptions
// todo: replace { netexClassID: 'Entity' } with actual ranges
// todo: support in-line entities (Locale, RoadAddress, …) without ids (as blank nodes)
const properties: Record<string, Property> = {
  access: createProperty('access', { netexClassId: 'Access' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'accesses/Access/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'accesses/AccessRef/encode-for-uri(@ref)' } }] }),
  accessibilityAssessment: createProperty('accessibilityAssessment', { netexClassId: 'AccessibilityAssessment' }), // todo: external sameAs
  accessMode: createProperty('accessMode', { enum: enums.accessMode }, { netexAttributes: simpleAttribute('AccessModes') }),
  accessSpace: createProperty('accessSpace', { netexClassId: 'AccessSpace' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'accessSpaces/AccessSpace/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'accessSpaces/AccessSpaceRef/encode-for-uri(@ref)' } }] }),
  additionalTopographicPlace: createProperty('additionalTopographicPlace', { netexClassId: 'TopographicPlace' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'additionalTopographicPlaces/TopographicPlaceRef/encode-for-uri(@ref)' } }] }),
  adjacentSite: createProperty('adjacentSite', { netexClassId: 'Site' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'adjacentSites/*[ends-with(name(), "Ref")]/encode-for-uri(@ref)' } }] }),
  alarmButton: createBooleanProperty('alarmButton', { description: 'Flag indicating if this entity has an alarm button (e.g. in a lift).' }),
  alightingUse: createBooleanProperty('alightingUse'),
  allAreasWheelchairAccessible: createBooleanProperty('allAreasWheelchairAccessible', { description: 'Flag indicating if all areas of the entity are wheelchair accessible.' }),
  atCentre: createBooleanProperty('atCentre', { description: 'Flag indicating if the entity is located at the center of its topographic place.' }),
  attendant: createBooleanProperty('attendant', { description: 'Flag indicating if this entity has an attendant (e.g. in a lift).' }),
  audioAnnouncements: createBooleanProperty('audioAnnouncements', { description: 'Flag indicating this entity has audio announcements (e.g. in a lift).' }),
  authority: createProperty('authority', { netexClassId: 'Authority' }, { netexAttributes: [{ name: 'AuthorityRef', isRef: true }] }),
  automatic: createBooleanProperty('automatic', { description: 'Flag indicating if this entity operates automatically (e.g. in a lift).' }),
  boardingPosition: createProperty('boardingPosition', { netexClassId: 'BoardingPosition' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'boardingPositions/BoardingPosition/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'boardingPositions/BoardingPositionRef/encode-for-uri(@ref)' } }] }),
  boardingUse: createBooleanProperty('boardingUse'),
  borderCrossing: createBooleanProperty('borderCrossing', { description: 'Flag indicating if the entity (usually a stop place) is a border crossing.' }),
  brailleButtons: createBooleanProperty('brailleButtons', { description: 'Flag indicating if buttons in/on this entity are marked in Braille.' }),
  branding: createProperty('branding', { netexClassId: 'Branding' }, { netexAttributes: [{ name: 'BrandingRef', isRef: true }] }),
  callButtonHeight: createDecimalProperty('callButtonHeight', { description: 'Height of this entities\' call button from the floor, in meters.' }),
  centroid: createProperty('centroid', { netexClassId: 'Centroid' }), // todo: external sameAs
  checkConstraint: createProperty('checkConstraint', { netexClassId: 'CheckConstraint' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'checkConstraints/CheckConstraint/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'checkConstraints/CheckConstraintRef/encode-for-uri(@ref)' } }] }),
  classOfUse: createProperty('classOfUse', { netexClassId: 'ClassOfUse' }, { netexAttributes: [{ name: 'ClassOfUseRef', isRef: true }] }),
  compassBearing: createFloatProperty('compassBearing', { description: 'Heading of entity, in degrees.' }),
  compassOctant: createProperty('compassOctant', { enum: enums.compassOctant }, { description: 'Heading of entity, as a compass octant (e.g. north-east).' }),
  containedIn: createProperty('containedIn', { netexClassId: 'TopographicPlace' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'containedIn/TopographicPlaceRef/encode-for-uri(@ref)' } }] }),
  containedInPlace: createProperty('containedInPlace', { netexClassId: 'TopographicPlace' }, { netexAttributes: [{ name: 'ContainedInPlaceRef', isRef: true }] }),
  continuousHandrail: createBooleanProperty('continuousHandrail', { description: 'Flag indicating if a handrail is continuous across the entire entity.' }),
  covered: createProperty('covered', { enum: enums.covered }),
  crossRoad: createStringProperty('crossRoad', { description: 'Name of a road that has a nearby intersection with the street the entity is on.' }),
  defaultLanguage: createProperty('defaultLanguage', { xsdType: 'language' }), // todo: external sameAs
  depth: createDecimalProperty('depth', { description: 'Depth of entity, in meters.' }),
  description: createStringProperty('description'),
  directionButtonHeight: createDecimalProperty('directionButtonHeight', { description: 'Height of this entities\' direction call button(s) from the floor, in meters.' }),
  directionOfUse: createProperty('directionOfUse', { enum: enums.directionOfUse }, { description: 'Direction in which entity can be used.' }),
  dogsMustBeCarried: createBooleanProperty('dogsMustBeCarried', { description: 'Flag indicating if dogs must be carried while using this entity.' }),
  domainInDBStationsProfile: createProperty('domainInDBStationsProfile', { netexClassId: 'Entity' }, { namespace: 'db-stations', description: 'Domain for which this property is expected to be present (at least on some entities) in datasets conforming to the DB stations NeTEx profile.', subPropertyOf: [schemaCreator('domainIncludes')] }),
  edgeToTrackCenterDistance: createDecimalProperty('edgeToTrackCenterDistance', { description: 'Distance between the track center and the adjacent platform edge, in meters, as defined in chapter 13 of EN 15273-3:2013.' }),
  energySaving: createBooleanProperty('energySaving', { description: 'Flag indicating if the entity is operated in an energy-saving mode (e.g. an escalator that automatically turns off when not being used).' }),
  entrance: createProperty('entrance', { netexClassId: 'Entity' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'entrances/*[not(ends-with(name(), "Ref"))]/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'entrances/*[ends-with(name(), "Ref")]/encode-for-uri(@ref)' } }] }),
  equipmentPlace: createProperty('equipmentPlace', { netexClassId: 'EquipmentPlace' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'equipmentPlaces/EquipmentPlace/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'equipmentPlaces/EquipmentPlaceRef/encode-for-uri(@ref)' } }] }),
  escalatorWithLanding: createBooleanProperty('escalatorWithLanding', { description: 'Flag indicating if an escalator entity has landings.' }),
  evaId: createIdProperty('evaId', { namespace: 'db-stations', sameAs: [wdtCreator('P954')], isKey: true, parserConfigs: [{ type: 'string', format: { reference: 'keyList/KeyValue[Key="EVA"]/Value' } }] }),
  externalFloorSelection: createBooleanProperty('externalFloorSelection', { description: 'Flag indicating if floor selection is made outside this entity (e.g. for a lift).' }),
  facility: createProperty('facility', { netexClassId: 'SiteFacilitySet' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'facilities/SiteFacilitySet/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'facilities/SiteFacilitySetRef/encode-for-uri(@ref)' } }] }),
  flight: createProperty('flight', { netexClassId: 'StairFlight' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'flights/StairFlight/encode-for-uri(@id)' } }] }),
  gated: createProperty('gated', { enum: enums.gated }),
  groundMarkAlignedWithButton: createBooleanProperty('groundMarkAlignedWithButton', { description: 'Flag indicating if there is a tactile marking on the ground, aligned or below to the ground floor button in/on this entity (e.g. in a lift).' }),
  handrailHeight: createDecimalProperty('handrailHeight', { description: 'Height of this entities\' primary (upper) handrail from the floor, in meters.' }),
  handrailType: createProperty('handrailType', { enum: enums.lighting }),
  height: createDecimalProperty('height', { description: 'Height of entity (or entrance to entity, for certain equipments), in meters.' }),
  id: createIdProperty('id', { netexAttributes: simpleAttribute('@id') }),
  ifoptStopId: createIdProperty('ifoptStopId', { namespace: 'db-stations', sameAs: [wdtCreator('P12393')], isKey: true, netexAttributes: simpleAttribute('@id') }),
  image: createProperty('image', { xsdType: 'anyURI' }), // todo: external sameAs
  internalHeight: createDecimalProperty('internalHeight', { description: 'Internal width of entity, in meters (used for entities where netex:width indicates the width of the entrance).' }),
  internalWidth: createDecimalProperty('internalWidth', { description: 'Internal height of entity, in meters (used for entities where netex:height indicates the height of the entrance).' }),
  label: createStringProperty('label'),
  landmark: createStringProperty('landmark', { description: 'Name of a landmark  near the entity, which can be used to describe its relative location.' }),
  length: createDecimalProperty('length', { description: 'Length of entity, in meters.' }),
  level: createProperty('level', { netexClassId: 'Level' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'levels/Level/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'levels/LevelRef/encode-for-uri(@ref)' } }] }),
  lighting: createProperty('lighting', { enum: enums.lighting }),
  limitedUse: createProperty('limitedUse', { enum: enums.limitedUse }, { description: 'Usage limitations of entity (usually a stop place).' }),
  locale: createProperty('locale', { netexClassId: 'Locale' }), // todo: external sameAs
  localService: createProperty('localService', { netexClassId: 'LocalService' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'localServices/*[not(ends-with(name(), "Ref"))]/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'localServices/*[ends-with(name(), "Ref")]/encode-for-uri(@ref)' } }] }),
  lowerHandrailHeight: createDecimalProperty('lowerHandrailHeight', { description: 'Height of this entities\' secondary (lower) handrail from the floor, in meters.' }),
  magneticInductionLoop: createBooleanProperty('magneticInductionLoop', { description: 'Flag indicating the presence of a magnetic induction loop in/on/at this entity (e.g. in a lift).' }),
  mainTerminusForPlace: createProperty('mainTerminusForPlace', { netexClassId: 'TopographicPlace' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'mainTerminusForPlaces/TopographicPlaceRef/encode-for-uri(@ref)' } }] }),
  maximumLoad: createDecimalProperty('maximumLoad', { description: 'Maximum load of entity, in kilograms.' }),
  member: createProperty('member', { netexClassId: 'Point' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'members/*[ends-with(name(), "Ref")]/encode-for-uri(@ref)' } }] }),
  mirrorOnOppositeSide: createBooleanProperty('mirrorOnOppositeSide', { description: 'Flag indicating if there is a mirror on the wall opposite the entrance/door (usually in a lift).' }),
  monitoringRemoteControl: createBooleanProperty('monitoringRemoteControl', { description: 'Flag indicating if the entity is equipped with a remote operation control system.' }),
  name: createStringProperty('name', { sameAs: [transmodelFacilitiesCreator('name'), foafCreator('name'), schemaCreator('name')] }),
  nameSuffix: createStringProperty('nameSuffix', { description: 'Further suffix to an entities\' name that may be used in some contexts.' }),
  navigationPath: createProperty('navigationPath', { netexClassId: 'NavigationPath' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'navigationPaths/NavigationPath/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'navigationPaths/NavigationPathRef/encode-for-uri(@ref)' } }] }),
  note: createStringProperty('note', { description: 'Further description or other comment for internal use by the operator.' }),
  numberOfSteps: createPositiveIntegerProperty('numberOfSteps', { description: 'Number of steps on entity.' }),
  numberOfFlights: createIntegerProperty('numberOfFlights', { description: 'Number of stair flights on entity.' }),
  operator: createProperty('operator', { netexClassId: 'Operator' }, { netexAttributes: [{ name: 'OperatorRef', isRef: true }] }),
  organisation: createProperty('organisation', { netexClassId: 'Organisation' }, { netexAttributes: [{ name: 'OrganisationRef', isRef: true }] }),
  outOfService: createBooleanProperty('outOfService', { description: 'Flag indicating if an entity if out of service for protracted time.' }),
  parentQuay: createProperty('parentQuay', { netexClassId: 'Quay' }, { netexAttributes: [{ name: 'ParentQuayRef', isRef: true }] }),
  parentSite: createProperty('parentSite', { netexClassId: 'Site' }, { netexAttributes: [{ name: 'ParentSiteRef', isRef: true }] }),
  parentZone: createProperty('parentZone', { netexClassId: 'Zone' }, { netexAttributes: [{ name: 'ParentZoneRef', isRef: true }] }),
  passengersPerMinute: createIntegerProperty('passengersPerMinute', { description: 'Number of passengers per minute which can use this entity.' }),
  pathJunction: createProperty('pathJunction', { netexClassId: 'PathJunction' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'pathJunctions/PathJunction/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'pathJunctions/PathJunctionRef/encode-for-uri(@ref)' } }] }),
  pathLink: createProperty('pathLink', { netexClassId: 'PathLink' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'pathLinks/PathLink/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'pathLinks/PathLinkRef/encode-for-uri(@ref)' } }] }),
  personCapacity: createIntegerProperty('personCapacity', { description: 'Total number of people this entity can contain.' }),
  placeEquipment: createProperty('placeEquipment', { netexClassId: 'Entity' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'placeEquipments/*[not(ends-with(name(), "Ref"))]/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'placeEquipments/*[ends-with(name(), "Ref")]/encode-for-uri(@ref)' } }] }),
  placeType: createProperty('placeType', { netexClassId: 'TypeOfPlace' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'placeTypes/TypeOfPlaceRef/encode-for-uri(@ref)' } }] }),
  plateCode: createStringProperty('plateCode', { description: 'A number/code for the entity which is used on signage.' }),
  platformHeight: createDecimalProperty('platformHeight', { description: 'Height of platform, in meters.' }),
  postalAddress: createProperty('postalAddress', { netexClassId: 'PostalAddress' }), // todo: external sameAs
  postCode: createStringProperty('postCode'),
  privateCode: createStringProperty('privateCode', { description: 'A private code that uniquely identifies the entity. May be used for inter-operating with other (legacy) systems.' }),
  projection: createProperty('projection', { netexClassId: 'Entity' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'projections/*[not(ends-with(name(), "Ref"))]/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'projections/*[ends-with(name(), "Ref")]/encode-for-uri(@ref)' } }] }),
  province: createStringProperty('province'),
  publicCode: createStringProperty('publicCode', { description: 'A code which may be publicly displayed on/in/around the entity to identify it.' }),
  publicUse: createProperty('publicUse', { enum: enums.publicUse }),
  purposeOfGrouping: createProperty('purposeOfGrouping', { netexClassId: 'PurposeOfGrouping' }, { netexAttributes: [{ name: 'PurposeOfGroupingRef', isRef: true }] }),
  quay: createProperty('quay', { netexClassId: 'Quay' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'quays/Quay/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'quays/QuayRef/encode-for-uri(@ref)' } }] }),
  quayType: createProperty('quayType', { enum: enums.quayType }),
  raisedButtons: createBooleanProperty('raisedButtons', { description: 'Flag indicating if buttons in/on this entity are raised.' }),
  reachedFloorAnnouncement: createBooleanProperty('reachedFloorAnnouncement', { description: 'Flag indicating this entity has a visual, tactile or audible display to announce the floor it has reached (e.g. in a lift).' }),
  relativeWeighting: createIntegerProperty('relativeWeighting'),
  ril100Id: createIdProperty('ril100Id', { namespace: 'db-stations', sameAs: [wdtCreator('P8671')], isKey: true, parserConfigs: [{ type: 'string', format: { reference: 'keyList/KeyValue[Key="RIL"]/Value' } }] }),
  roadAddress: createProperty('roadAddress', { netexClassId: 'RoadAddress' }), // todo: external sameAs
  safeForGuideDog: createBooleanProperty('safeForGuideDog', { description: 'Flag indicating if an entity is safe for a guide dog.' }),
  servedPlace: createProperty('servedPlace', { netexClassId: 'TopographicPlace' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'servedPlaces/TopographicPlaceRef/encode-for-uri(@ref)' } }] }),
  shortCode: createStringProperty('shortCode', { description: 'A 20 bit number used for wireless cleardown of stop displays by some AVL systems.' }),
  shortName: createStringProperty('shortName'),
  signageToLift: createBooleanProperty('signageToLift', { description: 'Flag indicating if this lift has "good" signage to find it.' }),
  site: createProperty('site', { netexClassId: 'Site' }, { netexAttributes: [{ name: 'SiteRef', isRef: true }] }),
  siteType: createProperty('siteType', { enum: enums.siteType }),
  spiralStair: createBooleanProperty('spiralStair', { description: 'Flag indicating if stairs on entity are spiral.' }),
  stadaId: createIdProperty('stadaId', { namespace: 'db-stations', sameAs: [wdtCreator('P12282')], isKey: true, netexAttributes: simpleAttribute('PrivateCode') }), // todo: use keylist instead
  stairRamp: createProperty('stairRamp', { enum: enums.stairRamp }, { description: 'Property indicating the presence and classification of a stair ramp on this entity.' }),
  stepColourContrast: createBooleanProperty('stepColourContrast', { description: 'Flag indicating if steps on this entity have a colour contrasted nosing.' }),
  stepCondition: createProperty('stepCondition', { enum: enums.stepCondition }),
  stepHeight: createDecimalProperty('stepHeight', { description: 'Height of an individual step on this entity, in meters, usually rounded to the next centimeter.' }),
  stepLength: createDecimalProperty('stepLength', { description: 'Length (depth) of an individual step on this entity, in meters, usually rounded to the next centimeter.' }),
  stopPlaceType: createProperty('stopPlaceType', { enum: enums.stopPlaceType }),
  stopPlaceWeight: createProperty('stopPlaceWeight', { enum: enums.stopPlaceWeight }, { description: 'Type of expected interchange level at stop place (e.g. for use in journey planning or for classification).' }),
  street: createStringProperty('street'),
  suitableForCycles: createBooleanProperty('suitableForCycles', { description: 'Flag indicating if an entity is usable/passable for bicycles.' }),
  tactileActuators: createBooleanProperty('tactileActuators', { description: 'Flag indicating if all buttons in/on this entity have tactile markings.' }),
  tactileGroundFloorButton: createBooleanProperty('tactileGroundFloorButton', { description: 'Flag indicating if the ground floor button in/on this entity (e.g. in a lift) has tactile marking.' }),
  tactileWriting: createBooleanProperty('tactileWriting', { description: 'Flag indicating the presence of signage that can be read tactilely (e.g. in Braille) on this entities\' handrails.' }),
  tariffZone: createProperty('tariffZone', { netexClassId: 'TariffZone' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'tariffZones/TariffZoneRef/encode-for-uri(@ref)' } }] }),
  throughLoader: createBooleanProperty('throughLoader', { description: 'Flag indicating if this entity is a so-called "through-loader" (usually used to describe lifts with more than one cabin door).' }),
  timeZone: createStringProperty('timeZone'), // todo: external sameAs
  topographicPlace: createProperty('topographicPlace', { netexClassId: 'TopographicPlace' }, { netexAttributes: [{ name: 'TopographicPlaceRef', isRef: true }] }),
  town: createStringProperty('town'),
  transportMode: createProperty('transportMode', { enum: enums.transportMode }),
  transportOrganisation: createProperty('transportOrganisation', { netexClassId: 'TransportOrganisation' }, { netexAttributes: [{ name: 'TransportOrganisationRef', isRef: true }] }),
  type: createProperty('type', { netexClassId: 'TypeOfZone' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'types/TypeOfZoneRef/encode-for-uri(@ref)' } }], description: 'Type of zone for this entity.' }),
  unlocalisedEquipment: createProperty('unlocalisedEquipment', { netexClassId: 'Entity' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'unlocalisedEquipments/*[not(ends-with(name(), "Ref"))]/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'unlocalisedEquipments/*[ends-with(name(), "Ref")]/encode-for-uri(@ref)' } }] }),
  url: createProperty('url', { xsdType: 'anyURI' }, { sameAs: [foafCreator('page')] }),
  vehicleStoppingPlace: createProperty('vehicleStoppingPlace', { netexClassId: 'VehicleStoppingPlace' }, { parserConfigs: [{ type: 'IRI', format: { reference: 'vehicleStoppingPlaces/VehicleStoppingPlace/encode-for-uri(@id)' } }, { type: 'IRI', format: { reference: 'vehicleStoppingPlaces/VehicleStoppingPlaceRef/encode-for-uri(@ref)' } }] }),
  weighting: createProperty('weighting', { enum: enums.weighting }, { description: 'Default rating of entity (usually a stop place) for making interchanges.' }),
  wheelchairPassable: createBooleanProperty('wheelchairPassable', { description: 'Flag indicating if an entity is usable/passable by wheelchair.' }),
  wheelchairTurningCircle: createDecimalProperty('wheelchairTurningCircle', { description: 'Maximim turning circle for a wheelchair within this entity, in meters.' }),
  width: createDecimalProperty('width', { description: 'Width of entity (or entrance to entity, for certain equipments), in meters.' }),
  withoutRiser: createBooleanProperty('withoutRiser', { description: 'Flag indicating if steps on this equipment do not have a riser (e.g. for openworks staircases).' })
}

export default properties