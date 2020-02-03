import 'reflect-metadata';
import express from 'express';
import { createExpressServer } from 'routing-controllers';
import { Container } from 'typedi';
import { useContainer as useContainerRoutingControllers } from 'routing-controllers';

import { CarController } from './api/cars/carController';
import { JourneyController } from './api/journeys/journeysController';

// Creates express app, registers all controller routes and returns you express app instance
const app: express.Application = createExpressServer({
  controllers: [CarController, JourneyController],
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

useContainerRoutingControllers(Container);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
