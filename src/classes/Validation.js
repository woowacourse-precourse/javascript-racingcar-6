import Constraints from '../constants/Constraints';
import ErrorMessage from '../constants/ErrorMessage';

export default class Validation {
  #cars;

  #tryNumber;

  constructor(cars, tryNumber) {
    this.#cars = cars;
    this.#tryNumber = tryNumber;
  }

  isValid() {
    if (this.#isCheckDuplicate()) {
      throw new Error(ErrorMessage.DUPLICATE);
    }
    if (!this.#isCheckLength()) {
      throw new Error(ErrorMessage.LENGTH);
    }
    if (!this.#isCheckNumber()) {
      throw new Error(ErrorMessage.NUMBER);
    }
    if (!this.#isCheckNatural()) {
      throw new Error(ErrorMessage.NATURAL);
    }
    return true;
  }

  #isCheckDuplicate() {
    const set = new Set(this.#cars);
    return set.size !== this.#cars.length;
  }

  #isCheckLength() {
    return this.#cars.every((car) => car.length <= Constraints.MAX_LENGTH);
  }

  #isCheckNumber() {
    return !Number.isNaN(this.#tryNumber);
  }

  #isCheckNatural() {
    const number = parseFloat(this.#tryNumber);
    return Number.isInteger(number) && number > 0;
  }
}
