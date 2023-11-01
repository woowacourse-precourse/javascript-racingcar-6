import ERROR_MESSAGE, { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from './constants.js';

class Validation {
  static isWrongCarName(name) {
    return !(name.length > MIN_NAME_LENGTH && name.length <= MAX_NAME_LENGTH);
  }

  static isDuplicateCarName(names) {
    return new Set(names).size !== names.length;
  }

  static validateCarNames(carNames) {
    const names = carNames.split(',').map((name) => name.trim());
    if (names.some(this.isWrongCarName)) {
      throw new Error(ERROR_MESSAGE.wrongInput);
    }
    if (this.isDuplicateCarName(names)) {
      throw new Error(ERROR_MESSAGE.repeatCarName);
    }
    return names;
  }

  static validateTryCount(tryCount) {
    if (!Number.isInteger(Number(tryCount)) || tryCount < 1) {
      throw new Error(ERROR_MESSAGE.wrongTryCount);
    }
    return tryCount;
  }
}

export default Validation;
