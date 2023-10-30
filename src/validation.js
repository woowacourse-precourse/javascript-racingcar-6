import ERROR_MESSAGE from './constant/errorMessage';

export const validation = {
  isValidNameFormat: (inputNames) => {
    if (inputNames.includes(',')) {
      throw new Error(ERROR_MESSAGE.DIVISION_BY_SEMICOLON);
    }
  },
  isValidNamesArray: (inputNames) => {
    if (!inputNames.every((name) => name.length <= 5)) {
      throw new Error(ERROR_MESSAGE.LESS_THAN_FIVE);
    }
    if (!inputNames.length < 2) {
      throw new Error('자동차 이름은 최소 2개 이상 입력해주세요.');
    }
  },
  isValidNumberOfTimesFormat: (inputNumber) => {
    if (isNaN(inputNumber) || inputNumber <= 0) {
      throw new Error('유효한 숫자가 아닙니다.');
    }
  },
};

export default validation;
