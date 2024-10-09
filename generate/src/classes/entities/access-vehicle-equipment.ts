import properties from '../../properties/index.js'
import { Class, createClass, createPropertyAssertion as a } from '../_util.js'

export const AccessVehicleEquipment: Class = createClass('AccessVehicleEquipment', [
  // still missing:
  // - version, … (attributes)
  // - alternativeTexts
  // - buttonsHeight
  // - infoLinks
  // - typeOfEquipment
  // - validBetween
  // - validityConditions
  // - fixed
  // - hoist
  // - ramp
  // - equipmentLength
  // - equipmentWidth
  // - …

  a(properties.bearingCapacity),
  a(properties.id),
  a(properties.name),
  a(properties.privateCode),
  a(properties.publicCode, { dbStationsProfile: false })
])
