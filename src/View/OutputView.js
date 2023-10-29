import { MESSAGE } from "../utils/Constant.js";
import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  async outputExecutionResultMessage() {
    console.log(MESSAGE.EXECUTION_RESULT);
  },

  async outputExecutionResultBoard(name, position) {
    Console.print(`${name} : ${'-'.repeat(position)}`);
  },

  async outputWinnerResult(winner) {
    Console.print(MESSAGE.OUTPUT_WINNER_RESULT + String(winner.join(', ')));
  },
}

export { OutputView };