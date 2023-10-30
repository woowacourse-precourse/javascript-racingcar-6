import ErrorMessage from './ErrorMessage.js';

class Validator {
  static validateCarNames(array) {
    if (this.#isEmpty(array[0])) throw new Error(ErrorMessage.EMPTY);
  }

  static #isEmpty(value) {
    return value === '';
  }
}

export default Validator;
