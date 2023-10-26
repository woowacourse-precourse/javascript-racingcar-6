import { Constant } from './Constant.js';

class Validator {
  static checkHasDuplicate(userInput) {
    return new Set(userInput).size === userInput.length;
  }

  static checkIsExceedMaxNum(userInput) {
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i].length > Constant.maxNameLength) {
        return true;
      }
    }
    return false;
  }

  static checkIsNumber(userInput) {
    return !Number.isNaN(userInput);
  }
}

export default Validator;
