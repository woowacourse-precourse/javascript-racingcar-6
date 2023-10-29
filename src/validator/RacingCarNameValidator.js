import { SYMBOLS } from '../constants/Symbols.js';
import CommonValidator from './CommonValidator.js';
import ValidationError from '../error/ValidationError.js';

export default class RacingCarNameValidator {
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
   * @constant
   */
  static CARNAME_VALIDATION_TYPES = Object.freeze({
    validNameLength: Object.freeze({
      message: '5자 초과의 자동차 이름은 입력할 수 없습니다.',
      isValid(input) {
        const splitInput = input.split(SYMBOLS.comma);
        const inValidInput = splitInput.filter((name) => name.length > 5);

        return inValidInput.length < 1;
      },
    }),
    duplicationName: Object.freeze({
      message: '중복된 자동차 이름은 입력할 수 없습니다.',
      isValid(input) {
        const splitInput = input.split(SYMBOLS.comma);
        const inputSet = new Set(splitInput);

        return splitInput.length === inputSet.size;
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
   * @returns {RacingCarNameValidator} RacingCarNameValidator의 인스턴스
   */
  static generate(input) {
    return new RacingCarNameValidator(input);
  }

  /**
   * @public
   * @throws {ValidationError}
   * @return {void}
   */
  validateRacingCarName() {
    Object.values(RacingCarNameValidator.CARNAME_VALIDATION_TYPES).forEach(
      ({ message, isValid }) => {
        if (!isValid(this.#input)) {
          throw new ValidationError(message);
        }
      },
    );
  }
}
