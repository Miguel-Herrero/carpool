import { Service } from "typedi";

export interface Car {
  licensePlate: string;
}

export const REPO_SERVICE = "CarRepo";

export interface ICarRepo {
  getCars(): Promise<Car[]>;
}

@Service(REPO_SERVICE)
class CarRepo implements ICarRepo {
  async getCars(): Promise<Car[]> {
    return [
      {
        licensePlate: "asdasd"
      }
    ];
  }
}
