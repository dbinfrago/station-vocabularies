import { EnumClass, createEnum } from './_util.js'

// todo: additional sameAs, descriptions
const enums: Record<string, EnumClass> = {
  accessMode: createEnum('AccessMode', [
    { id: 'foot' },
    { id: 'bicycle' },
    { id: 'boat' },
    { id: 'car' },
    { id: 'taxi' },
    { id: 'shuttle' },
    { id: 'ski' },
    { id: 'skate' },
    { id: 'motorcycle' },
    { id: 'scooter' }
  ]),
  compassOctant: createEnum('CompassOctant', [
    { id: 'SW' },
    { id: 'SE' },
    { id: 'NW' },
    { id: 'NE' },
    { id: 'W' },
    { id: 'E' },
    { id: 'S' },
    { id: 'N' }
  ]),
  covered: createEnum('Covered', [
    { id: 'indoors' },
    { id: 'outdoors' },
    { id: 'covered' },
    { id: 'mixed' },
    { id: 'unknown' }
  ]),
  directionOfUse: createEnum('DirectionOfUse', [
    { id: 'up' },
    { id: 'down' },
    { id: 'both' }
  ]),
  gated: createEnum('Gated', [
    { id: 'gatedArea' },
    { id: 'openArea' },
    { id: 'unknown' }
  ]),
  handrailType: createEnum('HandrailType', [
    { id: 'none' },
    { id: 'oneSide' },
    { id: 'bothSides' }
  ]),
  lighting: createEnum('Lighting', [
    { id: 'wellLit' },
    { id: 'poorlyLit' },
    { id: 'unlit' },
    { id: 'unknown' },
    { id: 'other' }
  ]),
  limitedUse: createEnum('LimitedUse', [
    { id: 'interchangeOnly' },
    { id: 'noDirectRoadAccess' },
    { id: 'longWalkToAccess' },
    { id: 'isolated' },
    { id: 'limitedService' },
    { id: 'other' }
  ]),
  publicUse: createEnum('PublicUse', [
    { id: 'all' },
    { id: 'disabledPublicOnly' },
    { id: 'authorisedPublicOnly' },
    { id: 'staffOnly' },
    { id: 'publicOnly' }
  ]),
  quayType: createEnum('QuayType', [
    { id: 'airlineGate' },
    { id: 'railPlatform' },
    { id: 'railIslandPlatform' },
    { id: 'railPlatformSector' },
    { id: 'metroPlatform' },
    { id: 'metroIslandPlatform' },
    { id: 'metroIslandPlatformSector' },
    { id: 'coachStop' },
    { id: 'busStop' },
    { id: 'busPlatform' },
    { id: 'busBay' },
    { id: 'tramPlatform' },
    { id: 'tramStop' },
    { id: 'boatQuay' },
    { id: 'ferryLanding' },
    { id: 'telecabinPlatform' },
    { id: 'taxiStand' },
    { id: 'setDownPlace' },
    { id: 'vehicleLoadingPlace' },
    { id: 'handicappedLevelBoardingSector' },
    { id: 'multimodal' },
    { id: 'busStopWithinRoadwayBoarding' },
    { id: 'tramStopWithinRoadwayBoarding' },
    { id: 'other' }
  ]),
  siteType: createEnum('SiteType', [
    { id: 'school' },
    { id: 'university' },
    { id: 'works' },
    { id: 'office' },
    { id: 'militaryBase' },
    { id: 'retail' },
    { id: 'transport' },
    { id: 'sports' },
    { id: 'government' },
    { id: 'culturalAttraction' },
    { id: 'other' }
  ]),
  stairRamp: createEnum('StairRamp', [
    { id: 'none' },
    { id: 'bicycle' },
    { id: 'luggage' },
    { id: 'stroller' },
    { id: 'other' },
    { id: 'unknown' }
  ]),
  stepCondition: createEnum('StepCondition', [
    { id: 'even' },
    { id: 'uneven' },
    { id: 'rough' }
  ]),
  stopPlaceType: createEnum('StopPlaceType', [
    { id: 'onstreetBus' },
    { id: 'onstreetTram' },
    { id: 'airport' },
    { id: 'railStation' },
    { id: 'metroStation' },
    { id: 'busStation' },
    { id: 'coachStation' },
    { id: 'tramStation' },
    { id: 'harbourPort' },
    { id: 'ferryPort' },
    { id: 'ferryStop' },
    { id: 'liftStation' },
    { id: 'vehicleRailInterchange' },
    { id: 'taxiRank' },
    { id: 'other' }
  ]),
  stopPlaceWeight: createEnum('StopPlaceWeight', [
    { id: 'international' },
    { id: 'national' },
    { id: 'regional' },
    { id: 'local' }
  ]),
  transportMode: createEnum('TransportMode', [
    { id: 'all' },
    { id: 'unknown' },
    { id: 'bus' },
    { id: 'trolleyBus' },
    { id: 'tram' },
    { id: 'coach' },
    { id: 'rail' },
    { id: 'intercityRail' },
    { id: 'urbanRail' },
    { id: 'metro' },
    { id: 'air' },
    { id: 'water' },
    { id: 'cableway' },
    { id: 'funicular' },
    { id: 'snowAndIce' },
    { id: 'taxi' },
    { id: 'ferry' },
    { id: 'lift' },
    { id: 'selfDrive' },
    { id: 'anyMode' },
    { id: 'other' }
  ]),
  weighting: createEnum('Weighting', [
    { id: 'noInterchange' },
    { id: 'interchangeAllowed' },
    { id: 'recommendedInterchange' },
    { id: 'preferredInterchange' }
  ])
}

export default enums
