const InputValidator = {
  isNumeric(input) {
    const numberRegExp = /^\d+$/;
    return numberRegExp.test(input);
  },

  isValidCountCars(count) {
    return this.isNumeric(count) && count >= 2;
  },

  isValidCarName(name) {
    return name.length >= 1 && name.length <= 5;
  },

  isValidUniqueName(names) {
    return new Set(names).size === names.length;
  },

  isValidRoundNumber(round) {
    return this.isNumeric(round) && round >= 1;
  },

  hasValidCarNames(carNames) {
    if (!this.isValidUniqueName(carNames)) {
      throw new Error('[ERROR] 중복되는 이름이 존재합니다.');
    }

    if (carNames.some((name) => !this.isValidCarName(name))) {
      throw new Error('[ERROR] 이름은 1글자 이상 5자 이하여야 합니다.');
    }

    if (!this.isValidCountCars(carNames.length)) {
      throw new Error('[ERROR] 최소 2개 이상의 이름이 필요합니다.');
    }

    return carNames;
  },

  hasValidRound(round) {
    if (!this.isValidRoundNumber(round)) {
      throw new Error('[ERROR] 최소 1이상의 숫자여야 합니다.');
    }

    return round;
  },
};

export default InputValidator;
