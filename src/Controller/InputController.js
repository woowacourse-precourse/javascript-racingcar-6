import { Console } from "@woowacourse/mission-utils";

class InputController {
  constructor() {
    this.carNames = [];
  }

  async init() {
    this.carNames = await InputController.getCarNames();
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

  static isValidCarNames(carNames) {
    const isUnderFive = carNames.every((carName) => carName.length <= 5);
    const isOverOne = carNames.length >= 1;

    return isUnderFive && isOverOne;
  }
}

export default InputController;
