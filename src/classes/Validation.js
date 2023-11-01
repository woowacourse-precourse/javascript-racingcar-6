import CONSTRAINTS from '../constants/Constraints';
import ERROR_MESSAGE from '../constants/ErrorMessage';

export default class Validation {
  #cars;

  #tryNumber;

  constructor(cars, tryNumber) {
    this.#cars = cars;
    this.#tryNumber = tryNumber;
  }

  isValid() {
    if (this.#isCheckDuplicate()) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
    if (!this.#isCheckLength()) {
      throw new Error(ERROR_MESSAGE.LENGTH);
    }
    if (!this.#isCheckNumber()) {
      throw new Error(ERROR_MESSAGE.NUMBER);
    }
    if (!this.#isCheckNatural()) {
      throw new Error(ERROR_MESSAGE.NATURAL);
    }
    return true;
  }

  #isCheckDuplicate() {
    const set = new Set(this.#cars);
    return set.size !== this.#cars.length;
  }

  #isCheckLength() {
    return this.#cars.every((car) => car.length <= CONSTRAINTS.MAX_LENGTH);
  }

  #isCheckNumber() {
    return !Number.isNaN(this.#tryNumber);
  }

  #isCheckNatural() {
    const number = parseFloat(this.#tryNumber);
    return Number.isInteger(number) && number > 0;
  }
}
