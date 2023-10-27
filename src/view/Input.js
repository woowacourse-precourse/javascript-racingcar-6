import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../util/constants.js";

class Input {
  async inputCarNames() {
    try {
      const carList = await Console.readLineAsync(MESSAGE.inputCarList);
      return carList;
    } catch (error) {
      throw `[ERROR]` + error;
    }
  }
}

export default Input;
