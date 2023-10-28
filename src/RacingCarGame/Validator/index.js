import ValidationError from './ValidationError/index.js';
import { NUMBER, SYMBOLS, ERROR } from '../constants/index.js';

class Validator {
  static isValidCarNameLength({ length }) {
    if (length > NUMBER.maxNameLength || !length) {
      throw new ValidationError(ERROR.invalidNameLength);
    }
  }

  static isSafeInteger(number) {
    if (!Number.isSafeInteger(Number(number)) || !number) {
      throw new ValidationError(ERROR.invalidLapCount);
    }
  }

  static validateCarNames(names) {
    names
      .replace(/\s/g, '')
      .split(SYMBOLS.nameDivider)
      .filter((name) => name)
      .forEach(this.isValidCarNameLength);
  }

  static validateLapCount(number) {
    this.isSafeInteger(number);
  }
}

export default Validator;
