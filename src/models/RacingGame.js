import Car from './Car.js';
import AppError from '../error/AppError.js';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';

class RacingGame {
  /**
   * @type { string[] }
   */

  #cars;

  /**
   *
   * @param { string[] } cars 입력 받은 모든 자동차 배열
   */

  constructor(cars) {
    this.#cars = cars;
    this.validate();
    this.initializeCars();
  }

  validate() {
    this.validateOfDuplication();
  }

  validateOfDuplication() {
    if (this.#cars.length !== new Set([...this.#cars]).size) {
      throw new AppError(ERROR_MESSAGES.have_duplication);
    }
  }

  getCars() {
    return this.#cars;
  }

  initializeCars() {
    const carArray = this.#cars.map((carName) => {
      const car = new Car(carName);
      return car.getCar();
    });

    this.#cars = carArray;
  }

  /**
   *
   * @param { string } inputString
   * @returns { RacingGame }
   */

  static fromInputString(inputString) {
    const cars = inputString.split(',');
    return new RacingGame(cars);
  }
}

export default RacingGame;
