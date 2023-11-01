import Car from './Car.js';
import AppError from '../error/AppError.js';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';

class AllNamesOfCars {
  /**
   * @member { string } SEPERATION_STANDARD 자동차 이름들이 분리 되는 기준점
   * @member { string } MIN_CAR_LENGTH 최소 대회 참가 자동차 갯수
   */
  static SEPERATION_STANDARD = ',';

  static MIN_CAR_LENGTH = 2;

  /**
   * @type { string[] } 유효성 검사를 위해 대문자로 다 바꿔주어서 판단할 필드
   */

  #cars;

  /**
   * @type { string[] } 원본 자동차들을 담을 필드
   */

  #originalCars;

  /**
   *
   * @param { string[] } cars
   */

  constructor(cars) {
    this.#originalCars = [...cars];
    this.#cars = cars.map((car) => car.toUpperCase());
    this.validate();
    this.initializeCars();
  }

  validate() {
    this.validateOfDuplication();
    this.validateOfLength();
  }

  validateOfDuplication() {
    if (this.#cars.length !== new Set([...this.#cars]).size) {
      throw new AppError(ERROR_MESSAGES.have_duplication);
    }
  }

  validateOfLength() {
    if (this.#cars.length < AllNamesOfCars.MIN_CAR_LENGTH) {
      throw new AppError(ERROR_MESSAGES.out_of_range_of_cars);
    }
  }

  initializeCars() {
    const carArray = this.#originalCars.map((carName) => {
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
