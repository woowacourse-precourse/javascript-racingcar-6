import Data from './Data.js';

const ErrorHandler = {
  carNamesType(carNames) {
    if (carNames.indexOf(',') === -1 || carNames.indexOf(',') === carNames.length - 1) {
      throw new Error('[ERROR] 쉼표(,)를 기준으로 구분해야 합니다.');
    }

    const refinedCarNames = new Data().carNamesTypeConversion(carNames);

    if (refinedCarNames.some((car) => car.trim() === "")) {
      throw new Error('[ERROR] 각 이름은 공백을 제외한 1자 이상이여야 합니다.');
    }
    if (refinedCarNames.some((car) => car.length >= 5)) {
      throw new Error('[ERROR] 각 이름은 5자 이하여야 합니다.');
    }
    if (new Set(refinedCarNames).size !== refinedCarNames.length) {
      throw new Error('[ERROR] 중복된 이름을 입력하셨습니다.');
    }
  },

  countType(count) {
    const isNotNumber = /[^0-9]/;

    if (isNotNumber.test(count)) {
      throw new Error('[ERROR] 0~9의 숫자형태로 입력해야 합니다.');
    }

    if (Number(count) === 0) {
      throw new Error('[ERROR] 1이상의 숫자를 입력해야 합니다. ');
    }
  }
}

export default ErrorHandler;