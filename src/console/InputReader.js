import { Console } from "@woowacourse/mission-utils";
import * as F from "../utility/utilityFunctions.js";
import validateCarName from "../validation/validateCarName.js";
import validateNameListLength from "../validation/validateNameListLength.js";
import validateRoundCount from "../validation/validateRountCount.js";
import GAME_TEXT from "../constants/gmaeText.js";

class InputReader {
  constructor() {}

  async enterCarNames() {
    try {
      const userInput = await this.consoleRead(GAME_TEXT.REQUEST.CAR_NAMES);

      const carNamesList = userInput.split(",");

      const filteredCarNames = F.go(
        carNamesList,
        F.filter((carName) => validateCarName(carName, 5)),
      );

      // min 으로 이름 변경
      validateNameListLength(filteredCarNames, 2);

      return filteredCarNames;
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }

  async enterRoundCount() {
    try {
      const userInput = await this.consoleRead();

      const filteredRoundCount = F.go(
        [...userInput],
        F.filter((countElement) => validateRoundCount(countElement)),
        F.join(""),
        Number,
      );

      return filteredRoundCount;
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }

  async consoleRead(text) {
    const response = await Console.readLineAsync(GAME_TEXT.REQUEST.ROUND_COUNT);

    return response;
  }
}

export default InputReader;
