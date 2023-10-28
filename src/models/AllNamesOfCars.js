import Car from './Car.js';
import AppError from '../error/AppError.js';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';

class AllNamesOfCars {
  /**
   * @type { string } 자동차 이름들이 분리 되는 기준점
   */
  static SEPERATION_STANDARD = ',';

  /**
   * @type { string[] }
   */

  #cars;

  /**
   *
   * @param { string[] } cars
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

  initializeCars() {
    const carArray = this.#cars.map((carName) => {
      const car = new Car(carName);
      return car.getCar();
    });

    this.#cars = carArray;
  }

  getAllCars() {
    return this.#cars;
  }

  /**
   *
   * @param { string } inputString
   * @returns { AllNamesOfCars }
   */
  static fromInputString(inputString) {
    const cars = inputString.split(AllNamesOfCars.SEPERATION_STANDARD);
    return new AllNamesOfCars(cars);
  }
}

export default AllNamesOfCars;
