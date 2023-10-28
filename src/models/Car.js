import AppError from '../error/AppError.js';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';

class Car {
  /**
   * @member { number } CAR_NAME_MAX_LENGTH 자동차 이름의 최대 글자수
   * @member { string } EMPTY_STRING 공백
   * @member { string } SPACE_STRING 이름 안에 들어가는 공백
   */
  static CAR_NAME_MAX_LENGTH = 5;

  static EMPTY_STRING = '';

  static SPACE_STRING = ' ';

  /**
   * @type { string }
   */

  #car;

  /**
   *
   * @param { string } car 단일 자동차 이름
   */

  constructor(car) {
    this.#car = car;
    this.validate();
  }

  getCar() {
    return this.#car;
  }

  validate() {
    this.validateOfHaveASpace();
    this.validateOfLength();
    this.validateOfSpecialCharacters();
  }

  validateOfHaveASpace() {
    if (this.#car === Car.EMPTY_STRING || this.#car.includes(Car.SPACE_STRING)) {
      throw new AppError(ERROR_MESSAGES.have_a_space);
    }
  }

  validateOfLength() {
    if (this.#car.length > Car.CAR_NAME_MAX_LENGTH) {
      throw new AppError(ERROR_MESSAGES.out_of_range_of_names);
    }
  }

  validateOfSpecialCharacters() {
    const regex = /^[a-zA-Z0-9가-힣]+$/;
    if (!regex.test(this.#car)) {
      throw new AppError(ERROR_MESSAGES.invalid_characters);
    }
  }
}

export default Car;
