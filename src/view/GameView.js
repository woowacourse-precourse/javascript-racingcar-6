import { MESSAGE } from "../constants/messages.js";
import { Console, Random } from "@woowacourse/mission-utils";

export class GameView {
  printInitialMessages() {
    Console.print("");
    Console.print(MESSAGE.RESULT);
  }

  printEndMessages(winnersNames) {
    Console.print(MESSAGE.getWinnersNames(winnersNames));
  }
}
