import { Console } from "@woowacourse/mission-utils";

class InputController {
  constructor() {
    this.carNames = [];
    this.tryCount = 0;
  }

  async init() {
    this.carNames = await InputController.getCarNames();
    this.tryCount = await InputController.getTryCount();
  }

  static async getCarNames() {
    const result = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    );

    const carNames = result.trim() === "" ? [] : result.split(",");

    if (!InputController.isValidCarNames(carNames)) {
      throw new Error("[ERROR] 유효하지 않은 자동차 이름입니다.");
    }

    return carNames;
  }

  static async getTryCount() {
    const tryCount = await Console.readLineAsync("시도할 회수는 몇회인가요?\n");

    if (!InputController.isValidTryCount(tryCount)) {
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
}

export default InputController;
