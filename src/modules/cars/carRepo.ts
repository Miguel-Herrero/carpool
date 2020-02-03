import { Service } from 'typedi';
import { Car, CarDTO } from './models/car';

export const CAR_REPO_IMPL = 'CarRepositoryImpl';

// TODO Move this in-memory database out from the Repository
let _cars = [];

export interface CarRepository {
  saveCars(cars: CarDTO[]): Promise<Car[]>;
  getSuitableCarForPeople(people: number): Promise<Car>;
  assignPeople(car: Car, people: number): Promise<void>;
}

@Service(CAR_REPO_IMPL)
export class CarRepositoryImpl implements CarRepository {
  async saveCars(cars: CarDTO[]): Promise<Car[]> {
    // TODO: Call the DB method, instead of having it inside the Repo.
    _cars = cars;

    return _cars;
  }

  async getSuitableCarForPeople(people: number): Promise<Car> {
    // TODO: Call the DB method, instead of having it inside the Repo.
    const suitableCar = _cars.find(car => car.seats >= people);

    return suitableCar;
  }

  async assignPeople(car: Car, people: number): Promise<void> {
    // TODO: Call the DB method, instead of having it inside the Repo.
    const carToUpdateIndex = _cars.findIndex(_car => _car.id === car.id);
    const carToUpdate = _cars[carToUpdateIndex];
    carToUpdate.seats -= people;

    // TODO: Call the DB method, instead of having it inside the Repo.
    _cars.splice(carToUpdateIndex, 1, carToUpdate);

    return carToUpdate;
  }
}
