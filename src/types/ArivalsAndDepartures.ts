export interface ArivalsAndDepartures {
    code: number;
    currentTime: number;
    data: Data;
    text: string;
    version: number;
  }
  export interface Data {
    entry: Entry;
    references: References;
  }
  export interface Entry {
    arrivalsAndDepartures?: (ArrivalsAndDeparturesEntity)[] | null;
    nearbyStopIds?: (string)[] | null;
    situationIds?: (string)[] | null;
    stopId: string;
  }
  export interface ArrivalsAndDeparturesEntity {
    arrivalEnabled: boolean;
    blockTripSequence: number;
    departureEnabled: boolean;
    distanceFromStop: number;
    frequency?: null;
    historicalOccupancy: string;
    lastUpdateTime: number;
    numberOfStopsAway: number;
    occupancyStatus: string;
    predicted: boolean;
    predictedArrivalInterval?: null;
    predictedArrivalTime: number;
    predictedDepartureInterval?: null;
    predictedDepartureTime: number;
    predictedOccupancy: string;
    routeId: string;
    routeLongName: string;
    routeShortName: string;
    scheduledArrivalInterval?: null;
    scheduledArrivalTime: number;
    scheduledDepartureInterval?: null;
    scheduledDepartureTime: number;
    serviceDate: number;
    situationIds?: (string)[] | null;
    status: string;
    stopId: string;
    stopSequence: number;
    totalStopsInTrip: number;
    tripHeadsign: string;
    tripId: string;
    tripStatus: TripStatus;
    vehicleId: string;
  }
  export interface TripStatus {
    activeTripId: string;
    blockTripSequence: number;
    closestStop: string;
    closestStopTimeOffset: number;
    distanceAlongTrip: number;
    frequency?: null;
    lastKnownDistanceAlongTrip: number;
    lastKnownLocation: LastKnownLocationOrPosition;
    lastKnownOrientation: number;
    lastLocationUpdateTime: number;
    lastUpdateTime: number;
    nextStop: string;
    nextStopTimeOffset: number;
    occupancyCapacity: number;
    occupancyCount: number;
    occupancyStatus: string;
    orientation: number;
    phase: string;
    position: LastKnownLocationOrPosition;
    predicted: boolean;
    scheduleDeviation: number;
    scheduledDistanceAlongTrip: number;
    serviceDate: number;
    situationIds?: (string)[] | null;
    status: string;
    totalDistanceAlongTrip: number;
    vehicleId: string;
  }
  export interface LastKnownLocationOrPosition {
    lat: number;
    lon: number;
  }
  export interface References {
    agencies?: (AgenciesEntity)[] | null;
    routes?: (RoutesEntity)[] | null;
    situations?: (SituationsEntity)[] | null;
    stops?: (StopsEntity)[] | null;
    trips?: (TripsEntity)[] | null;
  }
  export interface AgenciesEntity {
    disclaimer: string;
    email: string;
    fareUrl: string;
    id: string;
    lang: string;
    name: string;
    phone: string;
    privateService: boolean;
    timezone: string;
    url: string;
  }
  export interface RoutesEntity {
    agencyId: string;
    color: string;
    description: string;
    id: string;
    longName: string;
    shortName: string;
    textColor: string;
    type: number;
    url: string;
  }
  export interface SituationsEntity {
    activeWindows?: (null)[] | null;
    allAffects?: (AllAffectsEntity)[] | null;
    consequences?: (null)[] | null;
    creationTime: number;
    description: DescriptionOrSummaryOrUrl;
    id: string;
    publicationWindows?: (null)[] | null;
    reason: string;
    severity: string;
    summary: DescriptionOrSummaryOrUrl;
    url: DescriptionOrSummaryOrUrl;
  }
  export interface AllAffectsEntity {
    agencyId: string;
    applicationId: string;
    directionId: string;
    routeId: string;
    stopId: string;
    tripId: string;
  }
  export interface DescriptionOrSummaryOrUrl {
    lang: string;
    value: string;
  }
  export interface StopsEntity {
    code: string;
    direction: string;
    id: string;
    lat: number;
    locationType: number;
    lon: number;
    name: string;
    routeIds?: (string)[] | null;
    wheelchairBoarding: string;
  }
  export interface TripsEntity {
    blockId: string;
    directionId: string;
    id: string;
    routeId: string;
    routeShortName: string;
    serviceId: string;
    shapeId: string;
    timeZone: string;
    tripHeadsign: string;
    tripShortName: string;
  }
  