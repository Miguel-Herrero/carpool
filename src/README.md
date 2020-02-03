# Server

This server tries to separate the business using sort of Domain Driven Design:

- [`/api`](./api): this folder contains HTTP API endpoints (Infrastructure layer) with which clients can interact.
- [`/modules`](./modules): this folder has the Business logics for core entities; in our case a Car and a Journey.

See each folder's README.md for more details