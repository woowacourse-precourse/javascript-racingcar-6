import { Console } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE } from "../Constant/constant";

const Output = {
  printSingleLine() {
    Console.print("");
  },

  printResultMessage() {
    Console.print(PRINT_MESSAGE.resultMessage);
  },

  printMoveMarking(carMoveState) {
    carMoveState.forEach(([carName, currentPosition]) => {
      Console.print(
        `${carName} : ${PRINT_MESSAGE.moveMarking.repeat(currentPosition)}`
      );
    });
  },

  printWinnerMessage(winnersArray) {
    const winners = winnersArray.join(", ");
    Console.print(`${PRINT_MESSAGE.winnerMessage} : ${winners}`);
  },
};

export default Output;
