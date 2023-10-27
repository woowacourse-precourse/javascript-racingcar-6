import { NUMBER, SYMBOLS, ERROR } from '../constants/index.js';
import ValidationError from './ValidationError/index.js';

class Validator {
  static isValidCarNameLength({ length }) {
    if (length > NUMBER.maxNameLength || !length) {
      throw new ValidationError(ERROR.invalidNameLength);
    }
  }

  static isSafeInteger(number) {
    if (!Number.isSafeInteger(Number(number)) || !number) {
      throw new ValidationError(ERROR.invalidLapNumber);
    }
  }

  static validateCarNames(names) {
    names
      .replace(/\s/g, '')
      .split(SYMBOLS.nameDivider)
      .forEach(this.isValidCarNameLength);
  }

  static validateLapNumber(number) {
    return this.isSafeInteger(number);
  }
}

export default Validator;
