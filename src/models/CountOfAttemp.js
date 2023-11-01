import AppError from '../error/AppError.js';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';

class CountOfAttemp {
  /**
   * @type { number } 최소 시도 횟수
   */

  static MIN_NUM = 1;

  /**
   * @type { number }
   */

  #numberOfAttemps;

  /**
   *
   * @param { number } attemps 시도 횟수
   */
  constructor(attemps) {
    this.#numberOfAttemps = attemps;
    this.validate();
  }

  validate() {
    this.validateOfType();
    this.validateOfRange();
    this.validateOfInteger();
  }

  validateOfType() {
    if (Number.isNaN(this.#numberOfAttemps)) {
      throw new AppError(ERROR_MESSAGES.not_a_number);
    }
  }

  validateOfRange() {
    if (this.#numberOfAttemps < CountOfAttemp.MIN_NUM) {
      throw new AppError(ERROR_MESSAGES.out_of_range_of_attemps);
    }
  }

  validateOfInteger() {
    if (!Number.isInteger(this.#numberOfAttemps)) {
      throw new AppError(ERROR_MESSAGES.not_integer);
    }
  }

  getNumberOfAttemps() {
    return this.#numberOfAttemps;
  }

  /**
   *
   * @param { string } valueOfAttemps
   * @returns { CountOfAttemp }
   */

  static fromInputString(valueOfAttemps) {
    return new CountOfAttemp(Number(valueOfAttemps));
  }
}

export default CountOfAttemp;
