import { NUMBER, ERROR_HEADER } from './Constant.js';

const Validator = {
  validateCarNames(carNames) {
    const cars = carNames
      .split(',')
      .map(string => string.trim())
      .filter(string => string !== '');

    if (cars.length < NUMBER.LENGTH) {
      throw new Error(
        `${ERROR_HEADER} 최소 ${NUMBER.LENGTH}개 이상의 자동차 이름이 필요합니다.`,
      );
    }

    cars.forEach(name => {
      if (name.length > NUMBER.NAME) {
        throw new Error(
          `${ERROR_HEADER} 자동차 이름은 공백 포함 ${NUMBER.NAME}자 이하여야 합니다.`,
        );
      }
      if (cars.filter(item => item === name).length > 1) {
        throw new Error(`${ERROR_HEADER} 중복된 이름은 입력할 수 없습니다.`);
      }
    });
  },

  validateBlank(carNames) {
    const cars = carNames.split(',').map(string => string.trim());

    cars.forEach(carName => {
      if (carName === '') {
        throw new Error(
          `${ERROR_HEADER} 자동차 이름은 공백으로 지정할 수 없습니다.`,
        );
      }
    });
  },

  validateNumber(attempts) {
    if (!/^\d+$/.test(attempts.trim())) {
      throw new Error(`${ERROR_HEADER} 숫자를 입력해주세요.`);
    }
  },
};

export default Validator;
