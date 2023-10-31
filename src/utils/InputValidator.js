import { ERROR_MESSAGE } from '../constants/utils.js';

const InputValidator = {
  checkCarName(name) {
    const regExp = /^[A-Za-z가-힣]{1,5}$/;
    if (regExp.test(name)) {
      return true;
    }
    throw new Error(ERROR_MESSAGE.print(ERROR_MESSAGE.invalidName));
  },

  checkMoveCount(count) {
    const regExp = /^(?:[1-9]+\d*)$/;
    if (regExp.test(count)) {
      return true;
    }
    throw new Error(ERROR_MESSAGE.print(ERROR_MESSAGE.invalidCount));
  },
};

export default InputValidator;
