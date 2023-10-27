import AppError from '../error/AppError.js';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';

class RacingGame {
  #cars;

  constructor(cars) {
    this.#cars = cars;
    this.validate();
  }

  validate() {
    this.validateOfDuplication();
  }

  validateOfDuplication() {
    if (this.#cars.length !== new Set(this.#cars).size) {
      throw new AppError(ERROR_MESSAGES.have_duplication);
    }
  }

  getCars() {
    return this.#cars;
  }

  static fromInputString(inputString) {
    const cars = inputString.split(',');
    return new RacingGame(cars);
  }
}

export default RacingGame;
