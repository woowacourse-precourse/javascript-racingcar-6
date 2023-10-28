import { PrintMessage } from "../static/Static.js";
import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printSingleLine() {
    Console.print("");
  },

  printResultMessage() {
    Console.print(PrintMessage.RESULT_MESSAGE);
  },

  printMoveMarking(name, distanceCount) {
    Console.print(
      `${name} : ${PrintMessage.MOVE_MARKING.repeat(distanceCount)}`
    );
  },

  printWinnerMessage(winnersArray) {
    const winners = winnersArray.join(", ");
    Console.print(`${PrintMessage.WINNER_MESSAGE} : ${winners}`);
  },
};

export default OutputView;
