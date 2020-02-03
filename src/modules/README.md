# Modules
This is the core of the application. It contains the App and Domain layers.
A module is a subdomain that has its own identity and its own busines logic.
Each module has custom Use Cases, that is, specific actions that, when invoked, run a series of Business Logics that is hidden to Infrastructure implementation.

**Folders and structure:**
- `models/`: DTO model (contract in Infrastructure layer to the our world); `...Mapper.ts`, helper to convert between Infrastructure layer (DTO) and App/Domain layers (the Entity)
- `useCases/`: contains different Business actions that can be done on an Entity.
- `...Repo.ts`: hides persistence (from Infrastructure layer) to Application layer. // TODO: move persistence to a Database.ts in Infrastructure layer.

## Modules
### Core
It contains the shared thigs among modules. In this case only the Interfaces.

### Cars
This module handles the logic for creating and managing cars in our system.

### Journeys
This module creates journeys, and assigns them an available car.

