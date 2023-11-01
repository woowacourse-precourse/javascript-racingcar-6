import { Console } from "@woowacourse/mission-utils";
import * as F from "../utility/utilityFunctions.js";
import GAME_TEXT from "../constants/message/gmaeText.js";
import validateRoundCount from "../validation/validateRountCount.js";
import {
  validateCarNameFormat,
  validateDuplicateRegistrar,
  validateMinRegistrar,
} from "../validation/validateInput.js";

class InputReader {
  constructor() {}

  async enterCarNames() {
    const carNames = await this.consoleRead(GAME_TEXT.REQUEST.CAR_NAMES);

    const carNamesList = carNames.split(",");

    const filteredCarNames = F.go(
      carNamesList,
      F.filter((carName) => validateCarNameFormat(carName)),
    );

    validateMinRegistrar(filteredCarNames);
    validateDuplicateRegistrar(filteredCarNames);

    return filteredCarNames;
  }

  async enterRoundCount() {
    const roundCount = await this.consoleRead(GAME_TEXT.REQUEST.ROUND_COUNT);

    const filteredRoundCount = F.go(
      [...roundCount],
      F.filter((numberElement) => validateRoundCount(numberElement)),
      F.join(""),
      Number,
    );

    return filteredRoundCount;
  }

  async consoleRead(text) {
    try {
      const response = await Console.readLineAsync(text);

      return response;
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }
}

export default InputReader;
