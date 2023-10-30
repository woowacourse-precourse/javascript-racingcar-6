import { ErrorMessages } from "./constants.js"

class Validation {
  static validateArrayEmpty(input) {
    if (input.includes('')) {
      throw new Error(ErrorMessages.EMPTY_INPUT);
    }
  }

  static validateInputEmpty(input) {
    if (input === '') {
      throw new Error(ErrorMessages.EMPTY_INPUT);
    }
  }

  static validateHasDuplicate(input) {
    const uniqueNames = new Set(input);
    if (uniqueNames.size !== input.length) {
      throw new Error(ErrorMessages.DUPLICATE_CAR_NAME);
    }
  }

  static validateInputLength(inputs) {
    inputs.forEach((input) => {
      if (input.length < 1 || input.length > 5) {
        throw new Error(ErrorMessages.CAR_NAME_LENGTH_EXCEEDED);
      }
    })
  }

  static validateIsNegative(input) {
    if (input < 0) {
      throw new Error(ErrorMessages.NEGATIVE_RACE_COUNT);
    }
  }

  static validateIsNumber(input) {
    if (isNaN(input)) {
      throw new Error(ErrorMessages.INVALID_NUMBER_FORMAT);
    }
  }
}

export default Validation;