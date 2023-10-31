import { Console } from "@woowacourse/mission-utils";

class UserInterface {
  static async getCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNames = UserInterface.validateCarNames(input);
    return carNames;
  }

  static validateCarNames(names) {
    const carNames = names.split(",").map((name) => name.trim());

    const uniqueCarNames = new Set(carNames);
    if (uniqueCarNames.size !== carNames.length) {
      throw new Error("[ERROR] 자동차 이름이 중복됩니다.");
    }

    if (carNames.some((name) => name.length === 0)) {
      throw new Error("[ERROR] 자동차 이름은 공백일 수 없습니다.");
    }

    for (const carName of carNames) {
      if (carName.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    }
    return carNames;
  }

  static async getRaceRounds() {
    const input = await Console.readLineAsync("시도할 회수는 몇 회인가요?");
    const rounds = UserInterface.validateRounds(input);
    return rounds;
  }

  static validateRounds(rounds) {
    const parsedRounds = parseInt(rounds);
    if (
      Number.isNaN(parsedRounds) ||
      parsedRounds <= 0 ||
      parsedRounds.toString() !== rounds
    ) {
      throw new Error("[ERROR] 시도 횟수는 양의 정수만 가능합니다.");
    }
    return parsedRounds;
  }
}

export default UserInterface;
