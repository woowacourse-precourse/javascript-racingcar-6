class Validation {
  static isWrongCarName(name) {
    return !(name.length > 0 && name.length <= 5);
  }

  static isDuplicateCarName(names) {
    return new Set(names).size !== names.length;
  }

  static validateCarNames(carNames) {
    const names = carNames.split(',').map((name) => name.trim());
    if (names.some(this.isWrongCarName)) {
      throw new Error('[ERROR]');
    }
    if (this.isDuplicateCarName(names)) {
      throw new Error('[ERROR]');
    }
    return names;
  }

  static validateTryCount(tryCount) {
    if (!Number.isInteger(Number(tryCount)) || tryCount < 1) {
      throw new Error('[ERROR]');
    }
    return tryCount;
  }
}

export default Validation;
