import { Console } from "@woowacourse/mission-utils";

class UserInterface {
  static async getCarNames() {
    try {
      const input = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );
      const carNames = UserInterface.validateCarNames(input);
      return carNames;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static validateCarNames(names) {
    const carNames = names.split(",").map((name) => name.trim());

    const uniqueCarNames = new Set(carNames);
    if (uniqueCarNames.size !== carNames.length) {
      throw new Error("[ERROR] 자동차 이름이 중복됩니다.");
    }

    for (const carName of carNames) {
      if (carName.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    }
    return carNames;
  }
}

export default UserInterface;
