import { Console } from "@woowacourse/mission-utils";
import * as m from "./constants/message.js";

export class User {
  async inputCarNames() {
    try {
      const userInput = await Console.readLineAsync(m.INPUT_CAR_NAMES_MESSAGE);
      const names = userInput.split(" ").join("").split(",");
      if (!this.isValidCarNamesInput(names)) {
        throw new Error(m.INPUT_ERROR);
      }
      return names;
    } catch {
      throw new Error(m.INPUT_ERROR);
    }
  }

  async inputTryNumber() {}

  isValidCarNamesInput(names) {
    if (names.some((name) => name.length < 1 || name.length > 5)) {
      return false;
    }
    if (new Set(names).size != names.length) {
      return false;
    }
    return true;
  }

  isValidNumberInput(userInput) {}
}
