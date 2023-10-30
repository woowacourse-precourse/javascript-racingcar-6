import { Console } from "@woowacourse/mission-utils";
import { RACE_GAME_INPUT_MESSAGE } from "../constants";
class InputView {
  async getCarNamesUserInput() {
    const userInput = await Console.readLineAsync(
      RACE_GAME_INPUT_MESSAGE.enterCarNames
    );
    this.validateIsNull(userInput);
    return userInput;
  }

  async getTotalRoundUserInput() {
    const userInput = await Console.readLineAsync(
      RACE_GAME_INPUT_MESSAGE.enterTotalRound
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
