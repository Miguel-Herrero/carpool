# Car module
- `carController.ts`: [INFRASTRUCTURE] Handles HTTP requests with Router, Controller.
- `carDTO.ts`: [INFRASTRUCTURE] car object structure to pass data between layers (API contract)
- `carEntity.js`: [DOMAIN] Domain model of a Car (with its UUID, to have an identity, as opossed as a DTO)
- `carMapper.js`: [¿?] makes all the transformations: from Domain to DTO, from Domain to Persistence, from Persistence to Domain
- `carRepo.ts`: [INFRASTRUCTURE] Persists and retrieves domain Car entity.