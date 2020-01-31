import { Service } from 'typedi';
import { Car } from './carEntity';
import { CarDTO } from './carDTO';

export const CAR_REPO_IMPL = 'CarRepositoryImpl';

export interface CarRepository {
  getCars(): Promise<Car[]>;
  saveCars(cars: CarDTO[]): Promise<Car[]>;
}

@Service(CAR_REPO_IMPL)
class CarRepositoryImpl implements CarRepository {
  async getCars(): Promise<Car[]> {
    return [
      {
        uuid: '567uhj76trtyuijnbgty7',
        id: 1,
        seats: 4,
      },
    ];
  }

  async saveCars(cars: CarDTO[]): Promise<Car[]> {
    return [
      {
        uuid: '567uhj76trtyuijnbgty7',
        id: 1,
        seats: 4,
      },
    ];
  }
}
