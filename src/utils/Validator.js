import { ERROR_MESSAGE } from '../constants/messages.js';

export default class Validator {
  static isValidateCarName(answer) {
    const carName = answer.replace(/\s/g, '');
    if (
      !carName.split(',').every((name) => name.length > 0 && name.length <= 5)
    ) {
      throw new Error(ERROR_MESSAGE.carName);
    }
    return true;
  }

  static isValidateAttemps(answer) {
    const attemps = answer.replace(/\s/g, '');
    if (Number.isNaN(Number(attemps)) || attemps.length === 0) {
      throw new Error(ERROR_MESSAGE.attemps);
    }
    return true;
  }
}
