/**
 * @class InputView
 * @description 사용자의 입력을 받고, model에 전달한다
 */

import { Console } from "@woowacourse/mission-utils";

import Car from "../Model/Car.js";

class InputView {
  // 1-1. 경주할 자동차의 이름을 입력받는다.
  async getCarNames() {
    const result = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const carNames = result.trim() === "" ? [] : result.split(",");

    if (!InputView.isValidCarNames(carNames)) {
      throw new Error("[ERROR] 유효하지 않은 자동차 이름입니다.");
    }

    return carNames;
  }

  // 1-2. 시도할 횟수를 입력받는다.
  async getTryCount() {
    const tryCount = await Console.readLineAsync("시도할 회수는 몇 회인가요?\n");

    if (!InputView.isValidTryCount(tryCount)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    return Number(tryCount);
  }

  static isValidCarNames(carNames) {
    const isUnderFive = carNames.every((carName) => carName.length <= 5);
    const isOverOne = carNames.length >= 1;

    return isUnderFive && isOverOne;
  }

  static isValidTryCount(tryCount) {
    const isNumber = !Number.isNaN(Number(tryCount));
    const isOverOne = Number(tryCount) >= 1;

    return isNumber && isOverOne;
  }

  static createCar(carNames, tryCount) {
    return new Car(carNames, tryCount);
  }
}

export default InputView;
