import { Car } from "../models/car.js"

export class InputProcessor {
  static splitUserInput(input) {
    return input.split(",");
  }

  static createCarsFromNames(names) {
    return names.map(name => new Car(name));
  }
}