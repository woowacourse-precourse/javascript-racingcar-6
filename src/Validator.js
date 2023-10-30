import ErrorMessage from './ErrorMessage.js';

class Validator {
  static validateCarNames() {
    if (this.#isEmpty()) throw new Error(ErrorMessage.EMPTY);
  }

  static #isEmpty() {
    return true;
  }
}

export default Validator;
