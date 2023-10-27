import CustomError from '../errors/CustomError.js';
import { ERROR_MESSAGES, GAME_NUMBERS } from './constants.js';

class InputValidator {
  validateCarNames(names) {
    for (let name of names) {
      if (name.length > GAME_NUMBERS.carNameMaxLength) {
        throw new CustomError(ERROR_MESSAGES.carName.invalidLength);
      }
      if (name.trim().length === 0) {
        throw new CustomError(ERROR_MESSAGES.carName.blank);
      }
    }

    const uniqueNames = [...new Set(names)];
    if (uniqueNames.length !== names.length) {
      throw new CustomError(ERROR_MESSAGES.carName.duplicate);
    }
  }

  validateRoundsNumber(roundsNumber) {
    if (isNaN(roundsNumber)) {
      throw new CustomError(ERROR_MESSAGES.roundsNumber.notNumber);
    }
    if (roundsNumber < 0) {
      throw new CustomError(ERROR_MESSAGES.roundsNumber.negativeValue);
    }
  }
}

export default InputValidator;
