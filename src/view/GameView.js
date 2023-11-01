import { MESSAGE } from "../constants/messages.js";
import { Console } from "@woowacourse/mission-utils";

export class GameView {
  printInitialMessages() {
    Console.print("");
    Console.print(MESSAGE.RESULT);
  }

  printGameScore(moveCount) {
    for (let car in moveCount) {
      Console.print(`${car} : ${moveCount[car]}`);
    }

    Console.print("");
  }

  printEndMessages(winnersNames) {
    Console.print(MESSAGE.getWinnersNames(winnersNames));
  }
}
