import { Console } from "@woowacourse/mission-utils";
import Exception from "../exception/exception.js";

export default class UserInput {
  static async getCarNames() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    await Exception.carNames(carNames);
    return carNames;
  }
  static async getAttemptNumbers() {
    const attemptNumber = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    await Exception.attemptNumbers(attemptNumber);
    return attemptNumber;
  }
}
