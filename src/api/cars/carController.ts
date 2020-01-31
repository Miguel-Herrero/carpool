import { Controller, Get } from "routing-controllers";
import { Inject } from "typedi";
import { ICarRepo, REPO_SERVICE } from "../../repos/carRepo";

@Controller()
export class CarController {
  @Inject(REPO_SERVICE)
  private carRepo: ICarRepo;

  @Get('/cars')
  getAll(): void {
    return this.carRepo.getCars();
  }
}
