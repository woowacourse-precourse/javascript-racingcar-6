import { NUMBER, SYMBOLS, ERROR } from '../constants.js';
import ValidationError from './ValidationError/index.js';

class Validator {
  static validateCarNames(names) {
    names
      .replace(/\s/g, '')
      .split(SYMBOLS.nameDivider)
      .forEach(this.isValidCarNameLength);
  }

  static isValidCarNameLength({ length }) {
    if (length > NUMBER.maxNameLength || !length) {
      throw new ValidationError(ERROR.invalidNameLength);
    }
  }
}

export default Validator;
