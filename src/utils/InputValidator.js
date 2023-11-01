import CustomError from '../errors/CustomError.js';
import { ERROR_MESSAGES, GAME_NUMBERS } from './constants.js';

class InputValidator {
  validateCarNames(names) {
    for (const name of names) {
      this.#validateNameLength(name);
      this.#validateBlankName(name);
    }
    this.#validateNoDuplicateNames(names);
  }

  #validateNameLength(name) {
    if (name.length > GAME_NUMBERS.carNameMaxLength) {
      throw new CustomError(ERROR_MESSAGES.carName.invalidLength);
    }
  }

  #validateBlankName(name) {
    if (name.trim().length === 0) {
      throw new CustomError(ERROR_MESSAGES.carName.blank);
    }
  }

  #validateNoDuplicateNames(names) {
    const uniqueNames = [...new Set(names)];
    if (uniqueNames.length !== names.length) {
      throw new CustomError(ERROR_MESSAGES.carName.duplicate);
    }
  }

  validateRoundsNumber(roundsNumber) {
    this.#validateIsNumber(roundsNumber);
    this.#validateNonNegativeValue(roundsNumber);
    this.#validateNaturalNumber(roundsNumber);
    this.#validateNumberRange(roundsNumber);
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

  #validateNaturalNumber(value) {
    if (!Number.isInteger(value)) {
      throw new CustomError(ERROR_MESSAGES.roundsNumber.notNaturalNumber);
    }
  }

  #validateNumberRange(value) {
    if (value < GAME_NUMBERS.minRoundNumber) {
      throw new CustomError(ERROR_MESSAGES.roundsNumber.notInRange);
    }
  }
}

export default InputValidator;
