import ValidationError from './ValidationError/index.js';
import { NUMBER, SYMBOLS, ERROR } from '../constants/index.js';

class Validator {
  static validateNameLength(carNames) {
    if (!carNames.length) {
      throw new ValidationError(ERROR.invalidNameLength);
    }

    carNames.forEach(({ length }) => {
      if (length > NUMBER.maxNameLength || !length) {
        throw new ValidationError(ERROR.invalidNameLength);
      }
    });
  }

  static validateSafeInteger(number) {
    if (!Number.isSafeInteger(Number(number)) || number <= 0) {
      throw new ValidationError(ERROR.invalidLapCount);
    }
  }

  static validateCarNames(names) {
    const carNames = names
      .replace(/\s/g, '')
      .split(SYMBOLS.nameDivider)
      .filter(Boolean);

    this.validateNameLength(carNames);
  }

  static validateLapCount(number) {
    this.validateSafeInteger(number);
  }
}

export default Validator;
