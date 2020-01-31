import { CarController } from "./carController";

let carController: CarController;

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

beforeEach(() => {
  carController = new CarController(
    new MockCarRepo() // Speedy! And valid since it inherits IUserRepo.
  );
});

test("Should 200 with an empty array of users", async () => {
  let res = mockResponse();
  await userController.handleGetUsers(null, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ users: [] });
});
