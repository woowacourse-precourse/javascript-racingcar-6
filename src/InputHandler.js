import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constant/MESSAGE.js";

class InputHandler {
  static async getCarNameArray() {
    const inputStr = await Console.readLineAsync(MESSAGE.ENTER_CAR_NAMES);
    return inputStr.split(",");
  }
}

export default InputHandler;
