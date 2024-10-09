import properties from '../properties/index.js'
import { transmodelFacilitiesCreator, transmodelOrganisationsCreator } from '../uris.js'
import { Class, createClass, createPropertyAssertion as a } from './_util.js'
import { AccessVehicleEquipment } from './entities/access-vehicle-equipment.js'
import { EscalatorEquipment } from './entities/escalator-equipment.js'
import { LiftEquipment } from './entities/lift-equipment.js'
import { StaircaseEquipment } from './entities/staircase-equipment.js'
import { Quay } from './places/quay.js'
import { StopPlace } from './places/stop-place.js'
import { TopographicPlace } from './places/topographic-place.js'

const classes: Record<string, Class> = {
  access: createClass('Access', [], { dbStationsProfile: false }),

  accessibilityAssessment: createClass('AccessibilityAssessment', [a(properties.id)]),

  accessSpace: createClass('AccessSpace', [a(properties.id)]),

  accessVehicleEquipment: AccessVehicleEquipment,

  assistanceService: createClass('AssistanceService', [a(properties.id)]),

  authority: createClass('Authority', [], { dbStationsProfile: false }),

  boardingPosition: createClass('BoardingPosition', [], { dbStationsProfile: false }),

  branding: createClass('Branding', [], { dbStationsProfile: false }),

  centroid: createClass('Centroid', [], { dbStationsProfile: false }),

  checkConstraint: createClass('CheckConstraint', [], { dbStationsProfile: false }),

  classOfUse: createClass('ClassOfUse', [], { dbStationsProfile: false }),

  entrance: createClass('Entrance', [a(properties.id)]),

  entity: createClass('Entity', [], { dbStationsProfile: false }),

  entranceEquipment: createClass('EntranceEquipment', [a(properties.id)]),

  equipmentPlace: createClass('EquipmentPlace', [a(properties.id)]),

  escalatorEquipment: EscalatorEquipment,

  level: createClass('Level', [a(properties.id)]),

  liftEquipment: LiftEquipment,

  locale: createClass('Locale', [
    a(properties.defaultLanguage),
    a(properties.id),
    a(properties.timeZone)
  ], { dbStationsProfile: false }),

  localService: createClass('LocalService', [], { dbStationsProfile: false }),

  navigationPath: createClass('NavigationPath', [], { dbStationsProfile: false }),

  operator: createClass('Operator', [], { dbStationsProfile: false }),

  organisation: createClass('Organisation', [
    a(properties.id)
  ], { sameAs: [transmodelOrganisationsCreator('Organisation')] }),

  passengerInformationEquipment: createClass('PassengerInformationEquipment', [a(properties.id)]),

  pathJunction: createClass('PathJunction', [], { dbStationsProfile: false }),

  pathLink: createClass('PathLink', [], { dbStationsProfile: false }),

  point: createClass('Point', [], { dbStationsProfile: false }),

  postalAddress: createClass('PostalAddress', [
    a(properties.id),
    a(properties.postCode),
    a(properties.province),
    a(properties.street),
    a(properties.town)
  ], { dbStationsProfile: false }),

  purposeOfGrouping: createClass('PurposeOfGrouping', [], { dbStationsProfile: false }),

  quay: Quay,

  rampEquipment: createClass('RampEquipment', [a(properties.id)]),

  roadAddress: createClass('RoadAddress', [], { dbStationsProfile: false }),

  sanitaryEquipment: createClass('SanitaryEquipment', [a(properties.id)]),

  // todo: move properties from StopPlace and Quay to Site
  site: createClass('Site', [], { sameAs: [transmodelFacilitiesCreator('Site')], dbStationsProfile: false }),

  siteFacilitySet: createClass('SiteFacilitySet', [], { dbStationsProfile: false }),

  staircaseEquipment: StaircaseEquipment,

  stairFlight: createClass('StairFlight', [], { dbStationsProfile: false }),

  stopPlace: StopPlace,

  tariffZone: createClass('TariffZone', [], { dbStationsProfile: false }),

  topographicPlace: TopographicPlace,

  transportOrganisation: createClass('TransportOrganisation', [], { dbStationsProfile: false }),

  travelatorEquipment: createClass('TravelatorEquipment', [a(properties.id)]),

  typeOfPlace: createClass('TypeOfPlace', [], { dbStationsProfile: false }),

  typeOfZone: createClass('TypeOfZone', [], { dbStationsProfile: false }),

  vehicleStoppingPlace: createClass('VehicleStoppingPlace', [], { dbStationsProfile: false }),

  zone: createClass('Zone', [], { dbStationsProfile: false })
}

export default classes
