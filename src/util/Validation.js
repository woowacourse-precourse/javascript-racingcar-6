const Validation = {
  validateCarNames(carNames) {
    if (!carNames.every((carName) => carName.length <= 5)) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
    }

    if (new Set(carNames).size !== carNames.length) {
      throw new Error('[ERROR] 중복되는 자동차 이름이 존재합니다.');
    }

    if (!carNames.every((carName) => carName.trim() !== '')) {
      throw new Error('[ERROR] 자동차 이름은 빈값이 될 수 없습니다');
    }

    if (!carNames.every((carName) => !/\s/.test(carName))) {
      throw new Error('[ERROR] 자동차 이름에 공백을 사용할 수 없습니다.');
    }
  },

  validateTotalRounds(totalRounds) {
    if (!/^[0-9]+$/.test(totalRounds) || Number(totalRounds) < 1) {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 숫자만 입력 가능합니다.');
    }
  },
};

export default Validation;
