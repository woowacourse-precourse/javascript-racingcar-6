import { Console } from "@woowacourse/mission-utils";
import { INPUT_QUERY } from "../constants/messages.js";

class InputView {
  static async readCarNames() {
    return await InputView.#readInput(INPUT_QUERY.carNames);
  }

  static async readRoundNumber() {
    return await InputView.#readInput(INPUT_QUERY.roundNumbers);
  }

  static async #readInput(query) {
    return await Console.readLineAsync(query);
  }
}

export default InputView;
