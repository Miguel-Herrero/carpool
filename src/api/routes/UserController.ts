import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete
} from "routing-controllers";
import UserService from "../../services/UserService";
import { Inject } from "typedi";

@Controller()
export class UserController {
  @Inject()
  private userService: UserService;

  @Get("/users")
  getAll() {
    return this.userService.sayHello();
  }

  @Get("/users/:id")
  getOne(@Param("id") id: number) {
    return "This action returns user #" + id;
  }

  @Post("/users")
  post(@Body() user: any) {
    return "Saving user...";
  }

  @Put("/users/:id")
  put(@Param("id") id: number, @Body() user: any) {
    return "Updating a user...";
  }

  @Delete("/users/:id")
  remove(@Param("id") id: number) {
    return "Removing user...";
  }
}
