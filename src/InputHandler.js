import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constant/MESSAGE.js";
import ERROR from "./constant/ERROR.js";
import {
  endsWithComma,
  hasDuplicateItem,
  isEmptyString,
  isNaturalNumberString,
  isValidCarName,
} from "./utils/validators.js";

class InputHandler {
  static async getCarNameArray() {
    const inputStr = await Console.readLineAsync(MESSAGE.ENTER_CAR_NAMES);

    if (endsWithComma(inputStr)) {
      throw new Error(ERROR.INPUT_ENDS_WITH_COMMA);
    }

    if (isEmptyString(inputStr)) {
      throw new Error(ERROR.EMPTY_INPUT);
    }

    const array = inputStr.split(",");

    if (array.every(isValidCarName) === false) {
      throw new Error(ERROR.INVALID_CAR_NAMES);
    }

    if (hasDuplicateItem(array)) {
      throw new Error(ERROR.DUPLICATE_CAR_NAME);
    }

    return array;
  }

  static async getRoundCount() {
    const inputStr = await Console.readLineAsync(
      MESSAGE.ENTER_MOVE_ATTEMPT_COUNT
    );

    if (isEmptyString(inputStr)) {
      throw new Error(ERROR.EMPTY_INPUT);
    }

    if (!isNaturalNumberString(inputStr)) {
      throw new Error(ERROR.INVALID_MOVE_ATTEMPT_COUNT);
    }

    return Number(inputStr);
  }
}

export default InputHandler;
