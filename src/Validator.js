import { CONSTANT, ERROR } from './Constant.js';
import ValidationError from './ValidationError.js';

class Validator {
  static checkHasEmpty(userInput) {
    if (userInput.includes('')) {
      throw new ValidationError(ERROR.hasEmpty);
    }
  }

  static checkHasDuplicate(userInput) {
    if (new Set(userInput).size !== userInput.length) {
      throw new ValidationError(ERROR.hasDuplicate);
    }
  }

  static checkIsLongerThanMaxLen(userInput) {
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i].length > CONSTANT.maxNameLength) {
        throw new ValidationError(ERROR.longerThanMaxLen);
      }
    }
  }

  static checkIsNotNumber(userInput) {
    if (Number.isNaN(Number(userInput)) || userInput === '') {
      throw new ValidationError(ERROR.isNotNumber);
    }
  }

  static checkIsNotMoving(userInput) {
    if (Number(userInput) === CONSTANT.notMove) {
      throw new ValidationError(ERROR.notMoving);
    }
  }
}

export default Validator;
