import { Controller, Post } from "routing-controllers";
import { Inject } from "typedi";
import { ICarRepo, REPO_SERVICE } from "../../repos/carRepo";

@Controller()
export class CarController {
@Inject(REPO_SERVICE)
  private carRepo: ICarRepo;
  @Post("/cars")
  getAll() {
    return this.useCase.addCars()
  }
}
