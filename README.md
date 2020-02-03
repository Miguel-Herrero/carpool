# Carpool server

This is a basic implementation to create cars and journeys, and assign them a car.

It is a showcase/demo of:
- Typescript with JS linter.
- *Dependecy injection* (*Inversion of Control*, from [SOLID](https://en.wikipedia.org/wiki/SOLID)) with [Typedi](https://www.npmjs.com/package/typedi). It helps in testing clases by making it easier to mock Repositories and dependencies.
- Routing controller classes with [routing-controllers](https://www.npmjs.com/package/routing-controllers)
- *Domain Driven Design* (sort of) by separating Infrastructure (API), App (Use Cases) and Domain (Entities) layers. The goal is to avoid spaguetti code that mix implementations (route controller, databases, email notifiers, etc) with business logic (entities, business rules, etc)

# How to run
- `yarn install`
- Start server with `yarn start`, with hot-reload (`yarn prod` for compiled Javscript)
- You can create cars at `PUT /cars` (see `src/api/README.md` for body format)
- You can create journeys (and see what car is assigned) at `POST /journeys` (see [`src/api/README.md`](./src/api/) for body format).

# Things pending to develop
- [ ] Move DB out from Repository to Infrastructure layer.
- [ ] Create Mappers for each module to convert from/to Domain, DTO, Persistence.
- [ ] Make Use Cases return `Result` type, instead of Promises. This would unify handling errors and type of results.
- [ ] Tests by mocking dependencies, instead of using tools like Sinon to stub/mock them.
- [ ] Implement `GET /status`, and Dropoff business logic.