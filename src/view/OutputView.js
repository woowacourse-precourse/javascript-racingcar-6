import { PRINT_MESSAGE } from "../static/Static.js";
import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printSingleLine() {
    Console.print("");
  },

  printResultMessage() {
    Console.print(PRINT_MESSAGE.resultMessage);
  },

  printMoveMarking(carMoveState) {
    carMoveState.map((car) => {
      Console.print(`${car[0]} : ${PRINT_MESSAGE.moveMarking.repeat(car[1])}`);
    });
  },

  printWinnerMessage(winnersArray) {
    const winners = winnersArray.join(", ");
    Console.print(`${PRINT_MESSAGE.winnerMessage} : ${winners}`);
  },
};

export default OutputView;
