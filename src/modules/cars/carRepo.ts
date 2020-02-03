import { Service } from 'typedi';
import { Car, CarDTO } from './models/car';

export const CAR_REPO_IMPL = 'CarRepositoryImpl';

let _cars = [];

export interface CarRepository {
  saveCars(cars: CarDTO[]): Promise<Car[]>;
  getSuitableCarForPeople(people: number): Promise<Car>;
  assignPeople(car: Car, people: number): Promise<void>;
}

@Service(CAR_REPO_IMPL)
export class CarRepositoryImpl implements CarRepository {
  async saveCars(cars: CarDTO[]): Promise<Car[]> {
    _cars = cars;

    return _cars;
  }

  async getSuitableCarForPeople(people: number): Promise<Car> {
    const suitableCar = _cars.find(car => car.seats >= people);

    return suitableCar;
  }

  async assignPeople(car: Car, people: number): Promise<void> {
    const carToUpdateIndex = _cars.findIndex(_car => _car.id === car.id);
    const carToUpdate = _cars[carToUpdateIndex];
    carToUpdate.seats -= people;

    _cars.splice(carToUpdateIndex, 1, carToUpdate);

    return carToUpdate;
  }
}
