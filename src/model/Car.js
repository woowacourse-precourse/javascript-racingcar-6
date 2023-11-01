import { pickRandomSingleDigitNumber } from "../utils/random.js";
import { typeValidator, validateLengthBelow, validateLengthAbove } from "../utils/validators.js";

class Car {
  static #MIN_MOVE_VALUE = 4;

  #name;

  constructor(name) {
    Car.#validateName(name);
    this.#setName(name);
  }

  getName() {
    return this.#name;
  }

  move() {
    const randomNumber = pickRandomSingleDigitNumber();
    return randomNumber >= Car.#MIN_MOVE_VALUE;
  }

  static #validateName(value) {
    typeValidator.isString(value);

    validateLengthAbove(value, 0);
    validateLengthBelow(value, 6);
  }

  #setName(name) {
    this.#name = name;
  }
}

export default Car;
