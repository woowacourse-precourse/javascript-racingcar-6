import { validateIsString, validateLengthBelow } from "../utils/validators.js";

class Car {
  #name;

  constructor(name) {
    Car.#validateName(name);
    this.#setName(name);
  }

  getName() {
    return this.#name;
  }

  static isCar(value) {
    return value instanceof Car;
  }

  static #validateName(value) {
    validateIsString(value);
    validateLengthBelow(value, 6);
  }

  #setName(name) {
    this.#name = name;
  }
}

export default Car;
