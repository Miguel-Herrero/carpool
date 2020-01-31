import { JsonController, Put, Body } from 'routing-controllers';
import { Inject } from 'typedi';
import { Car } from './carEntity';
import { CarDTO } from './carDTO';
import { CarMap } from './carMapper';
import { CAR_REPO_IMPL, CarRepository } from './carRepo';

@JsonController()
export class CarController {
  @Inject(CAR_REPO_IMPL)
  private repo: CarRepository;

  @Put('/cars')
  async put(@Body({ required: true, type: 'CarDTO' }) cars: CarDTO[]): Promise<CarDTO[]> {
    const savedCars: Car[] = await this.repo.saveCars(cars);
    const savedCarsDTO: CarDTO[] = savedCars.map(car => CarMap.toDTO(car));
    return savedCarsDTO;
  }
}
