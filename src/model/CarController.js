import { Console } from "@woowacourse/mission-utils";

class CarController {
  #names;

  constructor(names) {
    this.#names = this.parseAndValidateNames(names);
  }

  parseAndValidateNames(names) {
    const nameArray = this.parseNames(names);

    this.validateNameLength(nameArray);

    return nameArray;
  }

  validateNameLength(nameArray) {
    if (!nameArray.every((name) => name.length <= 5)) {
      throw new Error(
        "[ERROR] 자동차 이름은 쉼표를 제외한 길이가 5자 이하이어야 합니다.",
      );
    }
  }

  parseNames(names) {
    return names.split(",").map((name) => name.trim().replace(/"/g, ""));
  }

  static async setNames() {
    const inputNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
    );

    if (!inputNames) {
      throw new Error("[ERROR] 자동차 이름이 입력되지 않았습니다.");
    }

    return new CarController(JSON.stringify(inputNames));
  }

  getNames() {
    return this.#names;
  }
}

export default CarController;
