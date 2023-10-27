import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constant/MESSAGE.js";
import ERROR from "./constant/ERROR.js";

class InputHandler {
  isValidCarName(name) {
    return /^[A-Za-z]{1,5}$/.test(name);
  }

  hasDuplicate(array) {
    return new Set(array).size !== array.length;
  }

  async getCarNameArray() {
    const inputStr = await Console.readLineAsync(MESSAGE.ENTER_CAR_NAMES);

    if (inputStr.endsWith(",")) {
      throw new Error(ERROR.INPUT_ENDS_WITH_COMMA);
    }

    if (inputStr.trim() === "") {
      throw new Error(ERROR.EMPTY_INPUT);
    }

    const array = inputStr.split(",");

    if (array.every(this.isValidCarName) === false) {
      throw new Error(ERROR.INVALID_CAR_NAMES);
    }

    if (this.hasDuplicate(array)) {
      throw new Error(ERROR.DUPLICATE_CAR_NAME);
    }

    return array;
  }
}

export default InputHandler;
