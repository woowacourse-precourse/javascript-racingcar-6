import { Car } from "../models/car.js"

export class Converter {
  static createCars(names) {
    return names.map(name => new Car(name));
  }
}
