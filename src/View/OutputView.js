import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/message.js";

class OutputView {
  static printResultStartMessage() {
    Console.print(OUTPUT_MESSAGE.RESULT_START);
  }

  static printResult({ position, name }) {
    Console.print(`${name} : ${"-".repeat(position)}`);
  }

  static printBlank() {
    Console.print("");
  }

  static printWinner(winner) {
    Console.print(`${OUTPUT_MESSAGE.WINNER}${winner}`);
  }
}

export default OutputView;
