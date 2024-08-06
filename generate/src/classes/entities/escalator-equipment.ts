import properties from '../../properties/index.js'
import { Class, createClass, createPropertyAssertion as a } from '../_util.js'

export const EscalatorEquipment: Class = createClass('EscalatorEquipment', [
  // still missing:
  // - version, … (attributes)
  // - alternativeTexts
  // - bottomEnd
  // - infoLinks
  // - topEnd
  // - typeOfEquipment
  // - validBetween
  // - validityConditions

  a(properties.branding, { dbStationsProfile: false }),
  a(properties.depth, { dbStationsProfile: false }),
  a(properties.description, { dbStationsProfile: false }),
  a(properties.directionOfUse),
  a(properties.dogsMustBeCarried),
  a(properties.energySaving, { dbStationsProfile: false }),
  a(properties.escalatorWithLanding, { dbStationsProfile: false }),
  a(properties.handrailHeight),
  a(properties.handrailType),
  a(properties.height),
  a(properties.id),
  a(properties.image, { dbStationsProfile: false }),
  a(properties.lowerHandrailHeight, { dbStationsProfile: false }),
  a(properties.monitoringRemoteControl, { dbStationsProfile: false }),
  a(properties.name),
  a(properties.note, { dbStationsProfile: false }),
  a(properties.numberOfSteps),
  a(properties.outOfService),
  a(properties.passengersPerMinute, { dbStationsProfile: false }),
  a(properties.privateCode),
  a(properties.publicCode, { dbStationsProfile: false }),
  a(properties.relativeWeighting, { dbStationsProfile: false }),
  a(properties.safeForGuideDog),
  a(properties.stairRamp, { dbStationsProfile: false }),
  a(properties.stepColourContrast),
  a(properties.stepCondition, { dbStationsProfile: false }),
  a(properties.stepHeight),
  a(properties.stepLength),
  a(properties.tactileActuators, { dbStationsProfile: false }),
  a(properties.tactileWriting),
  a(properties.width)
])
