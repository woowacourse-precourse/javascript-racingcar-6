import CustomError from '../errors/CustomError.js';
import { ERROR_MESSAGES, GAME_NUMBERS } from './constants.js';

class InputValidator {
  validateCarNames(names) {
    this.#validateNameLength(names);
    this.#validateBlankNames(names);
    this.#validateUniqueNames(names);
  }

  #validateNameLength(names) {
    for (let name of names) {
      if (name.length > GAME_NUMBERS.carNameMaxLength) {
        throw new CustomError(ERROR_MESSAGES.carName.invalidLength);
      }
    }
  }

  #validateBlankNames(names) {
    for (let name of names) {
      if (name.trim().length === 0) {
        throw new CustomError(ERROR_MESSAGES.carName.blank);
      }
    }
  }

  #validateUniqueNames(names) {
    const uniqueNames = [...new Set(names)];
    if (uniqueNames.length !== names.length) {
      throw new CustomError(ERROR_MESSAGES.carName.duplicate);
    }
  }

  validateRoundsNumber(roundsNumber) {
    this.#validateIsNumber(roundsNumber);
    this.#validateNonNegativeValue(roundsNumber);
  }

  #validateIsNumber(value) {
    if (isNaN(value)) {
      throw new CustomError(ERROR_MESSAGES.roundsNumber.notNumber);
    }
  }

  #validateNonNegativeValue(value) {
    if (value < 0) {
      throw new CustomError(ERROR_MESSAGES.roundsNumber.negativeValue);
    }
  }
}

export default InputValidator;
