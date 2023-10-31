import { validCars } from "../validation/carsValidation.js";

export const makeCarsArray = (message) => {
  const CARS = message.split(",");

  validCars(CARS);

  return CARS;
};
