// lib/app.ts
import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { UserController } from "./api/routes/UserController";
import { CarController } from "./api/cars/carController";
import express from "express";
import { Container } from "typedi";
import { useContainer as useContainerRoutingControllers } from "routing-controllers";

// Creates express app, registers all controller routes and returns you express app instance
const app: express.Application = createExpressServer({
  controllers: [UserController, CarController]
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

useContainerRoutingControllers(Container);

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});
