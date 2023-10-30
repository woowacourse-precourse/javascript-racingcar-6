import { Console } from "@woowacourse/mission-utils";

class InputView {
  async getCarNamesUserInput() {
    const userInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.validateIsNull(userInput);
    return userInput;
  }

  async getTotalRoundUserInput() {
    const userInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    const userInputNumber = Number(userInput);
    this.validateIsNumber(userInputNumber);
    return userInputNumber;
  }

  validateIsNumber(input) {
    if (Number.isNaN(input)) {
      throw new Error("[ERROR] 정수를 입력해주세요");
    }
  }

  validateIsNull(input) {
    if (input === "") {
      throw new Error("[ERROR] 1개 이상의 자동차 이름을 입력해주세요");
    }
  }
}

export default InputView;
