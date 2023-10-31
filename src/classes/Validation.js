import Constraints from '../constants/Constraints';

export default class Validation {
  #cars;

  #tryNumber;

  constructor(cars, tryNumber) {
    this.#cars = cars;
    this.#tryNumber = tryNumber;
  }

  isCheckDuplicate() {
    const set = new Set(this.#cars);
    return set.size !== this.#cars.length;
  }

  isCheckLength() {
    return this.#cars.every(
      (car) =>
        car.length >= Constraints.MIN_LENGTH &&
        car.length <= Constraints.MAX_LENGTH,
    );
  }
}
