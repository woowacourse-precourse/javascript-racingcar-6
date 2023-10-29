import MESSAGE from '../constants/message.js';
import CONDITION from '../constants/condition.js';

class Validation {
  static getNamesOfCar(answer, limitedLength) {
    const info = new Map();
    answer.split(',').forEach((str) => {
      if (str.length === 0 || str.length > limitedLength) {
        throw new Error(MESSAGE.error.carName);
      } else if (CONDITION.notNormalCharacter.test(str)) {
        throw new Error(MESSAGE.error.specialCharacter);
      } else if (info.has(str)) {
        throw new Error(MESSAGE.error.duplicateName);
      } else {
        info.set(str, 0);
      }
    });
    return info;
  }

  static getNumberOfTimes(answer) {
    const number = Number(answer);
    if (Number.isSafeInteger(number) && number > 0) {
      return number;
    } else {
      throw new Error(MESSAGE.error.numberOfTimes);
    }
  }
}

export default Validation;
