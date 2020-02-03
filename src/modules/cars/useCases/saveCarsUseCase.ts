import { Service, Inject } from 'typedi';
import { UseCase } from '../../core/useCaseInterface';
import { CAR_REPO_IMPL, CarRepository } from '../carRepo';
import { CarDTO } from '../models/car';

export const SAVE_CARS_USE_CASE = 'SAVE_CARS_USE_CASE';

@Service(SAVE_CARS_USE_CASE)
class SaveCarsUseCase implements UseCase<CarDTO[]> {
  @Inject(CAR_REPO_IMPL)
  private repo: CarRepository;

  async exec(cars: CarDTO[]): Promise<void> {
    const saved = await this.repo.saveCars(cars);
    return Promise.resolve();
  }
}
