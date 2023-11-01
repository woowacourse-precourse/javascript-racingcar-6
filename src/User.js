import { Console } from "@woowacourse/mission-utils";
import * as m from "./constants/message.js";
import * as c from "./constants/const.js";

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

  async inputTryNumber() {
    try {
      const userInput = await Console.readLineAsync(m.INPUT_TRY_NUMBER_MESSAGE);
      if (!this.isValidNumberInput(userInput)) {
        throw new Error(m.INPUT_ERROR);
      }
      return userInput;
    } catch {
      throw new Error(m.INPUT_ERROR);
    }
  }

  isValidCarNamesInput(names) {
    if (
      names.some(
        (name) =>
          name.length < c.MIN_LENGTH_NAME || name.length > c.MAX_LENGTH_NAME
      )
    ) {
      return false;
    }
    if (new Set(names).size != names.length) {
      return false;
    }
    return true;
  }

  isValidNumberInput(userInput) {
    if (isNaN(userInput) || Number(userInput) < c.MIN_TRY_NUMBER) {
      return false;
    }
    return true;
  }
}
