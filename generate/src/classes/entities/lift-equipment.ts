import properties from '../../properties/index.js'
import { Class, createClass, createPropertyAssertion as a } from '../_util.js'

export const LiftEquipment: Class = createClass('LiftEquipment', [
  // still missing:
  // - version, … (attributes)
  // - alternativeTexts
  // - buttonsHeight
  // - infoLinks
  // - typeOfEquipment
  // - validBetween
  // - validityConditions

  a(properties.alarmButton),
  a(properties.attendant),
  a(properties.audioAnnouncements),
  a(properties.automatic, { dbStationsProfile: false }),
  a(properties.brailleButtons, { dbStationsProfile: false }),
  a(properties.branding),
  a(properties.callButtonHeight),
  a(properties.depth),
  a(properties.description, { dbStationsProfile: false }),
  a(properties.directionButtonHeight),
  a(properties.directionOfUse),
  a(properties.externalFloorSelection, { dbStationsProfile: false }),
  a(properties.groundMarkAlignedWithButton),
  a(properties.handrailHeight, { dbStationsProfile: false }),
  a(properties.handrailType, { dbStationsProfile: false }),
  a(properties.height),
  a(properties.id),
  a(properties.image, { dbStationsProfile: false }),
  a(properties.internalHeight),
  a(properties.internalWidth),
  a(properties.lowerHandrailHeight, { dbStationsProfile: false }),
  a(properties.magneticInductionLoop),
  a(properties.maximumLoad),
  a(properties.mirrorOnOppositeSide, { dbStationsProfile: false }),
  a(properties.name),
  a(properties.note, { dbStationsProfile: false }),
  a(properties.outOfService),
  a(properties.passengersPerMinute, { dbStationsProfile: false }),
  a(properties.privateCode),
  a(properties.publicCode, { dbStationsProfile: false }),
  a(properties.raisedButtons),
  a(properties.reachedFloorAnnouncement, { dbStationsProfile: false }),
  a(properties.relativeWeighting, { dbStationsProfile: false }),
  a(properties.safeForGuideDog),
  a(properties.signageToLift, { dbStationsProfile: false }),
  a(properties.suitableForCycles),
  a(properties.tactileActuators),
  a(properties.tactileGroundFloorButton),
  a(properties.tactileWriting, { dbStationsProfile: false }),
  a(properties.throughLoader),
  a(properties.wheelchairPassable),
  a(properties.wheelchairTurningCircle),
  a(properties.width)
])
