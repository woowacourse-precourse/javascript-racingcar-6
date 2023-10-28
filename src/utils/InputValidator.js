import { ErrorMessages } from '../constants/ErrorMessages';
import { VALIDATION_RULES } from '../constants/ValidationRules';

export default class InputValidator {
  static validateCarName(name) {
    if (!name || name.trim().length === VALIDATION_RULES.MIN_NAME_LENGTH) {
      throw new Error(ErrorMessages.INVALID_NAME_EMPTY);
    }

    if (name.length > VALIDATION_RULES.MAX_NAME_LENGTH) {
      throw new Error(ErrorMessages.INVALID_NAME_LENGTH);
    }
  }

  static validateNumberOfRounds(rounds) {
    if (rounds <= VALIDATION_RULES.MIN_ROUND_NUMBER) {
      throw new Error(ErrorMessages.INVALID_ROUND_NUMBER);
    }
  }

  static validateNumberOfCars(numberOfCars) {
    if (numberOfCars < 2) {
      throw new Error(ErrorMessages.INVALID_NUMBER_OF_CARS);
    }
  }
}
