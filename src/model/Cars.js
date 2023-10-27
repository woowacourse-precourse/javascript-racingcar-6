import { errorMessage } from "../constants/messages.js";
import { validateIsArray } from "../utils/validators.js";
import Car from "./Car.js";

class Cars {
  #cars = [];

  constructor(cars) {
    Cars.#validate(cars);
    this.#cars = cars;
  }

  static #validate(value) {
    validateIsArray(value);
    Cars.#validateType(value);
  }

  static #validateType(array) {
    const isCars = array.every((element) => element instanceof Car);
    if (!isCars) throw Error(errorMessage.NOT_CARS);
  }
}

export default Cars;
