import ErrorMessage from './ErrorMessage.js';

class Validator {
  static #MAX_LENGTH = 5;

  static validateCarNames(array) {
    if (this.#isEmpty(array[0])) throw new Error(ErrorMessage.EMPTY);
    throw new Error(ErrorMessage.MAX_LENGTH);
  }

  static #isEmpty(value) {
    return value === '';
  }
}

export default Validator;
