import { Console } from "@woowacourse/mission-utils";
import { RACE_GAME_INPUT_MESSAGE, ERROR_MESSAGE } from "../constants.js";
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
    this.validateIsOverZero(userInputNumber);
    return userInputNumber;
  }

  validateIsNumber(input) {
    if (Number.isNaN(input)) {
      throw new Error(`[ERROR] ${ERROR_MESSAGE.isNotNumber}`);
    }
  }

  validateIsOverZero(input) {
    if (input <= 0) {
      throw new Error(`[ERROR] ${ERROR_MESSAGE.isNotOverZero}`);
    }
  }

  validateIsNull(input) {
    if (input === "") {
      throw new Error(`[ERROR] ${ERROR_MESSAGE.isCarListNull}`);
    }
  }
}

export default InputView;
