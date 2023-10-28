import { CONSTANT } from './Constant.js';

class Validator {
  static checkIsEmpty(userInput) {
    return userInput.includes('');
  }

  static checkHasDuplicate(userInput) {
    return new Set(userInput).size !== userInput.length;
  }

  static checkIsLessThanMaxLen(userInput) {
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i].length > CONSTANT.maxNameLength) {
        return false;
      }
    }
    return true;
  }

  static checkIsNumber(userInput) {
    return !Number.isNaN(userInput);
  }

  static checkIsMoving(userInput) {
    return userInput !== CONSTANT.notMove;
  }
}

export default Validator;
