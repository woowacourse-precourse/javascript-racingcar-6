import { ERROR_MESSAGES, GAME_NUMBERS } from './constants';

class InputValidator {
  validateCarName(name) {
    if (name.length > GAME_NUMBERS.carNameMaxLength) {
      throw new Error(ERROR_MESSAGES.invalidCarNameLength);
    }
  }

  validateRoundsNumber(roundsNumber) {
    if (isNaN(roundsNumber)) {
      throw new Error(ERROR_MESSAGES.invalidMovementCountNumber);
    }
    if (roundsNumber < 0) {
      throw new Error(ERROR_MESSAGES.invalidMovementCountNumber);
    }
  }
}

export default InputValidator;
