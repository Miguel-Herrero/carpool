import { Service } from "typedi";

@Service()
export default class UserService {
  public sayHello() {
    return "Hello from User Service!";
  }
}
