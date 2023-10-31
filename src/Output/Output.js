import { Console } from "@woowacourse/mission-utils";

const Output = {
  printSingleLine() {
    Console.print("");
  },

  printResultMessage() {
    Console.print("\n실행 결과");
  },

  printMoveMarking(carMoveState) {
    carMoveState.forEach(([carName, currentPosition]) => {
      Console.print(`${carName} : ${"-".repeat(currentPosition)}`);
    });
  },

  printWinnerMessage(winnersArray) {
    const winners = winnersArray.join(", ");
    Console.print(`${"최종 우승자"} : ${winners}`);
  },
};

export default Output;
