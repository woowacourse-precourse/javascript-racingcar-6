const Validator = {
  validateCarNames(names) {
    if (this.isCarNameHasBlank(names)) {
      throw new Error('[ERROR] 공백이 포함되지 않은 이름을 입력해주세요.');
    }

    if (this.isCarNameGreaterThanFive(names)) {
      throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
    }

    if (this.isDuplicated(names)) {
      throw new Error('[ERROR] 중복된 이름은 사용할 수 없습니다.');
    }
  },

  validateTryCount(number) {
    if (!this.isNumeric(number)) {
      throw new Error('[ERROR] 시도횟수는 숫자로 입력해주세요.');
    }
  },

  isCarNameHasBlank(names) {
    return names.find((name) => name.includes(' '));
  },

  isCarNameGreaterThanFive(names) {
    return names.some((name) => name.length > 5);
  },

  isDuplicated(names) {
    if (names.length !== new Set(names).size) {
      return true;
    }
  },

  isNumeric(tryCount) {
    return Number.isInteger(tryCount) && tryCount > 0;
  },
};

export default Validator;