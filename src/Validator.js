import ErrorMessage from './ErrorMessage.js';

class Validator {
  static #MIN_LENGTH = 1;
  static #MAX_LENGTH = 5;

  static #START_INCLUSIVE = 1;
  static #END_INCLUSIVE = 100;

  static validateCarNames(array) {
    if (Validator.#isEmpty(array[0])) throw new Error(ErrorMessage.EMPTY);
    if (!array.every((string) => Validator.#isLength(string))) {
      throw new Error(ErrorMessage.LENGTH);
    }
  }

  static validateNumberOfRound(value) {
    if (!Validator.#isBetween(value)) {
      throw new Error(ErrorMessage.ONE_TO_HUNDRED);
    }
  }

  static #isEmpty(value) {
    return value === '';
  }

  static #isLength(
    string,
    min = Validator.#MIN_LENGTH,
    max = Validator.#MAX_LENGTH,
  ) {
    return min <= string.length && string.length <= max;
  }

  static #isBetween(
    value,
    startInclusive = Validator.#START_INCLUSIVE,
    endInclusive = Validator.#END_INCLUSIVE,
  ) {
    return startInclusive <= value && value <= endInclusive;
  }
}

export default Validator;
