import { Console } from "@woowacourse/mission-utils";
import { inputQuery } from "../constants/messages.js";

class InputView {
  static async readCarNames() {
    return await InputView.#readInput(inputQuery.CAR_NAMES);
  }

  static async #readInput(query) {
    return await Console.readLineAsync(query);
  }
}

export default InputView;
