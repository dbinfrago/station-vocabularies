import properties from '../../properties/index.js'
import { Class, createClass, createPropertyAssertion as a } from '../_util.js'

export const StaircaseEquipment: Class = createClass('StaircaseEquipment', [
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
  a(properties.continuousHandrail),
  a(properties.depth, { dbStationsProfile: false }),
  a(properties.description, { dbStationsProfile: false }),
  a(properties.directionOfUse, { dbStationsProfile: false }),
  a(properties.flight, { dbStationsProfile: false }),
  a(properties.handrailHeight),
  a(properties.handrailType),
  a(properties.height, { dbStationsProfile: false }),
  a(properties.id),
  a(properties.image, { dbStationsProfile: false }),
  a(properties.lowerHandrailHeight),
  a(properties.name),
  a(properties.note, { dbStationsProfile: false }),
  a(properties.numberOfFlights, { dbStationsProfile: false }),
  a(properties.numberOfSteps),
  a(properties.outOfService, { dbStationsProfile: false }),
  a(properties.passengersPerMinute, { dbStationsProfile: false }),
  a(properties.privateCode),
  a(properties.publicCode, { dbStationsProfile: false }),
  a(properties.relativeWeighting, { dbStationsProfile: false }),
  a(properties.safeForGuideDog),
  a(properties.spiralStair),
  a(properties.stairRamp, { dbStationsProfile: false }),
  a(properties.stepColourContrast),
  a(properties.stepCondition),
  a(properties.stepHeight),
  a(properties.stepLength),
  a(properties.tactileWriting),
  a(properties.width),
  a(properties.withoutRiser)
])
