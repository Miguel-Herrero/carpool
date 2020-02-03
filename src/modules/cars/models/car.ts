// From/To App/Domain levels
export interface Car {
  uuid: string;
  id: number;
  seats: number;
}

// From/To Infrastructure/App level
export interface CarDTO {
  licensePlate: number;
  seats: number;
}