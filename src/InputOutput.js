import { Console } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";

class InputOutput {
  constructor() {
    this.validator = new Validator();
  }

  async getCarNames() {
    const userInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
    );
    const carNameList = userInput.split(",");
    Console.print(`${carNameList}`);
    return carNameList;
  }

  async getAttemptCount() {
    const userInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    if (this.validator.isNumber(userInput))
      throw new Error("[ERROR] 올바르지 않은 형식의 입력입니다.");
    return userInput;
  }

  print(message) {
    Console.print(message);
  }
}

export default InputOutput;
