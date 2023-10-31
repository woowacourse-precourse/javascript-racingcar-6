import ErrorMessage from './ErrorMessage.js';

class Validator {
  static #MIN_LENGTH = 1;
  static #MAX_LENGTH = 5;

  static validateCarNames(array) {
    if (this.#isEmpty(array[0])) throw new Error(ErrorMessage.EMPTY);
    if (!array.every((string) => this.#isLength(string))) {
      throw new Error(ErrorMessage.MAX_LENGTH);
    }
  }

  static validateAttemptCount() {
    throw new Error(ErrorMessage.ONE_TO_HUNDRED);
  }

  static #isEmpty(value) {
    return value === '';
  }

  static #isLength(string, min = this.#MIN_LENGTH, max = this.#MAX_LENGTH) {
    return min <= string.length && string.length <= max;
  }
}

export default Validator;
