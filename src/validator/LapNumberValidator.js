import CommonValidator from './CommonValidator.js';
import ValidationError from '../error/ValidationError.js';

export default class LapNumberValidator {
  /**
   * @private
   * @type {string}
   */
  #input;

  /**
   * @private
   * @type {CommonValidator}
   */
  #commonValidator;

  /**
   * @static
   * @public
   * @costant
   */
  static LAPNUMBER_VALIDATION_TYPES = Object.freeze({
    validCharactor: Object.freeze({
      message: '시도 횟수는 숫자만 입력할 수 있습니다.',
      isValid(input) {
        return !Number.isNaN(Number(input));
      },
    }),
  });

  /**
   * @constructor
   * @param {string} input
   */
  constructor(input) {
    this.#input = input;
    this.#commonValidator = new CommonValidator(input);
  }

  /**
   * @static
   * @public
   * @param {string} input - 검사할 문자열
   * @returns {LapNumberValidator} LapNumberValidator의 인스턴스
   */
  static generate(input) {
    return new LapNumberValidator(input);
  }

  /**
   * @public
   * @throws {ValidationError}
   * @returns {void}
   */
  validateLapNumber() {
    Object.values(LapNumberValidator.LAPNUMBER_VALIDATION_TYPES).forEach(({ message, isValid }) => {
      if (!isValid(this.#input)) {
        throw new ValidationError(message);
      }
    });
  }
}
