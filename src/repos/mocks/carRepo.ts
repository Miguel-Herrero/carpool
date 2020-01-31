import { ICarRepo, Car } from "../carRepo";

class MockCarRepo implements ICarRepo {
  private cars: Car[] = [];

  constructor() {}

  async getUsers(): Promise<Car[]> {
    return this.cars;
  }
}
