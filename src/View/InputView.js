import { Console } from "@woowacourse/mission-utils";

import { MESSAGE, ERROR } from "../constatnts/index.js";

class InputView {
  // 1-1. 경주할 자동차의 이름을 입력받는다.
  async getCarNames() {
    const result = await Console.readLineAsync(MESSAGE.GET_CAR_NAMES);
    const carNames = result.trim() === '' ? [] : result.split(',');

    if (!InputView.isValidCarNames(carNames)) {
      throw new Error(ERROR.ERROR_INVALID_CAR_NAMES);
    }

    return carNames;
  }

  // 1-2. 시도할 횟수를 입력받는다.
  async getTryCount() {
    const tryCount = await Console.readLineAsync(MESSAGE.GET_TRY_COUNT);

    if (!InputView.isValidTryCount(tryCount)) {
      throw new Error(ERROR.ERROR_INVALID_TRY_COUNT);
    }

    return Number(tryCount);
  }

  static isValidCarNames(carNames) {
    const isUnderFive = carNames.every((carName) => carName.length <= 5);
    const isOverOne = carNames.length >= 1;
    const isRepeat = new Set(carNames).size === carNames.length;

    return isUnderFive && isOverOne && isRepeat;
  }

  static isValidTryCount(tryCount) {
    const isNumber = !Number.isNaN(Number(tryCount));
    const isOverOne = Number(tryCount) >= 1;

    return isNumber && isOverOne;
  }
}

export default InputView;
