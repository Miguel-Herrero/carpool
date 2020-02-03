// From/To App/Domain levels
export interface Journey {
  uuid: string;
  id: number;
  people: number;
  car?: number;
}

// From/To Infrastructure/App level
export interface JourneyDTO {
  id: number;
  people: number;
}
