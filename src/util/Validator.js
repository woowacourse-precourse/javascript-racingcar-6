const Validator = {
  validateCarNames(carNames) {
    const carList = carNames
      .split(',')
      .map(string => string.trim())
      .filter(string => string !== '');

    if (carList.length < 2) {
      throw new Error('[ERROR] 최소 2개 이상의 자동차 이름이 필요합니다.');
    }

    carList.forEach(name => {
      if (name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 공백 포함 5자 이하여야 합니다.');
      }
      if (carList.filter(item => item === name).length > 1) {
        throw new Error('[ERROR] 중복된 이름은 입력할 수 없습니다.');
      }
    });
  },

  validateBlank(carNames) {
    const carList = carNames.split(',').map(string => string.trim());

    carList.forEach(carName => {
      if (carName === '') {
        throw new Error('[ERROR] 자동차 이름은 공백으로 지정할 수 없습니다.');
      }
    });
  },

  validateNumber(attempts) {
    if (!/^\d+$/.test(attempts.trim())) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
  },
};

export default Validator;
