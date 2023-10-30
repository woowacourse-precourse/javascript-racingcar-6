import { PrintMessage } from "../static/Static.js";
import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printSingleLine() {
    Console.print("");
  },

  printResultMessage() {
    Console.print(PrintMessage.RESULT_MESSAGE);
  },

  printMoveMarking(carMoveState) {
    carMoveState.map((car) => {
      Console.print(`${car[0]} : ${PrintMessage.MOVE_MARKING.repeat(car[1])}`);
    });
  },

  printWinnerMessage(winnersArray) {
    const winners = winnersArray.join(", ");
    Console.print(`${PrintMessage.WINNER_MESSAGE} : ${winners}`);
  },
};

export default OutputView;
