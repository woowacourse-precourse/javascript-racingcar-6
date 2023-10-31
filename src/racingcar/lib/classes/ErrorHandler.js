import REGEXS from '../constants/regexs';
import { ERROR_MESSAGE } from '../constants/messages';

class ErrorHandler {
  static validateInput(inputStr) {
    if (REGEXS.WHITE_SPACE.test(inputStr)) {
      throw new Error(ERROR_MESSAGE.NO_WHITE_SPACE);
    }
    if (REGEXS.SPECIAL_CHARACTER.test(inputStr)) {
      throw new Error(ERROR_MESSAGE.NO_SPECIAL_CHARACTER);
    }
  }

  static validateRacingCarName(carNameList) {
    if (carNameList.length === 1) {
      throw new Error(ERROR_MESSAGE.CAR_LIST_MINIMUM);
    }
    carNameList.forEach((carName) => {
      if (carNameList.filter((name) => name === carName).length >= 2) {
        throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
      }
      if (carName.length > 5) {
        throw new Error(ERROR_MESSAGE.NAME_LENGTH);
      }
    });
  }

  static validatePlayCount(playCount) {
    this.validateInput(playCount);
    if (!REGEXS.NUMBER.test(playCount)) {
      throw new Error(ERROR_MESSAGE.NO_NUMERIC);
    }
    if (playCount <= 0) {
      throw new Error(ERROR_MESSAGE.MIN_PLAY_COUNT);
    }
  }
}

export default ErrorHandler;
