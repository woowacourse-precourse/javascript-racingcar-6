import ERROR_MESSAGE from './constant/errorMessage.js';

const regex = /[!@#$%^&*()_+{}/:;<>.?~-]/;
export const validation = {
  isValidNameFormat: (inputNames) => {
    if (regex.test(inputNames)) {
      throw new Error(ERROR_MESSAGE.DIVISION_BY_SEMICOLON);
    }
  },
  isValidNamesArray: (inputNames) => {
    if (!inputNames.every((name) => name.length <= 5)) {
      throw new Error(ERROR_MESSAGE.LESS_THAN_FIVE);
    }
    if (inputNames.length < 2) {
      throw new Error(ERROR_MESSAGE.MIN_TWO_CARS);
    }
  },
  isValidNumberOfTimesFormat: (inputNumber) => {
    if (isNaN(inputNumber) || inputNumber <= 0) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_OF_TIMES);
    }
  },
};

export default validation;
