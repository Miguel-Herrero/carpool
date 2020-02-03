import { JsonController, Put, Body } from 'routing-controllers';
import { Inject } from 'typedi';
import { UseCase } from '../../modules/core/useCaseInterface';
import { SAVE_CARS_USE_CASE } from '../../modules/cars/useCases/saveCarsUseCase';
import { CarDTO } from '../../modules/cars/models/car';

@JsonController()
export class CarController {
  @Inject(SAVE_CARS_USE_CASE)
  private useCase: UseCase<CarDTO[]>;

  @Put('/cars')
  async put(@Body({ required: true, type: 'CarDTO' }) cars: CarDTO[]): Promise<CarDTO[]> {
    await this.useCase.exec(cars);
    return Promise.resolve(cars);
  }
}
