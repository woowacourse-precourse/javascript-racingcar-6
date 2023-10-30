import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/message.js";

class OutputView {
  static printResultStartMessage() {
    MissionUtils.Console.print(OUTPUT_MESSAGE.resultStart);
  }

  static printResult({ position, name }) {
    MissionUtils.Console.print(`${name} : ${"-".repeat(position)}`);
  }

  static printBlank() {
    MissionUtils.Console.print("");
  }

  static printWinner(winner) {
    MissionUtils.Console.print(`${OUTPUT_MESSAGE.winner}${winner}`);
  }
}

export default OutputView;
