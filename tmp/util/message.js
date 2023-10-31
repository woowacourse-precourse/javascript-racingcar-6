import { validCars } from "../validation/carsValidation.js";

export function makeCarsArray(message) {
  const CARS = message.split(",");

  validCars(CARS);

  return CARS;
}
