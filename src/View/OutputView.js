import { MESSAGE } from "../utils/Constant.js";
import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  async outputExecutionResultMessage() {
    console.log(MESSAGE.EXECUTION_RESULT);
  },

  async outputExecutionResultBoard(name, position) {
    Console.print(`${name} : ${'-'.repeat(position)}`);
  }
}

export { OutputView };