import { SYMBOLS } from '../constants/Symbols.js';
import ValidationError from '../error/ValidationError.js';

export default class CommonValidator {
  /**
   * @private
   * @type {string}
   */
  #input;

  /**
   * @constructor
   * @param {string} input
   */
  constructor(input) {
    this.#input = input.trim();
  }

  /**
   * @static
   * @public
   * @constant
   */
  static COMMON_VALIDATION_TYPES = Object.freeze({
    emptyInput: Object.freeze({
      message: '입력이 존재하지 않습니다, 다시 입력해주세요.',
      isValid(input) {
        return input !== SYMBOLS.empty;
      },
    }),
  });

  /**
   * @public
   * @throws {ValidationError}
   * @returns {void}
   */
  validate() {
    Object.values(CommonValidator.COMMON_VALIDATION_TYPES).forEach(({ message, isValid }) => {
      if (!isValid(this.#input)) {
        throw new ValidationError(message);
      }
    });
  }
}
