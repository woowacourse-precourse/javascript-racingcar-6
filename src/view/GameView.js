import { MESSAGE } from "../constants/messages.js";
import { RANGE } from "../constants/range.js";
import { Console, Random } from "@woowacourse/mission-utils";

export class GameView {
  printInitialMessages() {
    Console.print("");
    Console.print(MESSAGE.RESULT);
  }

  printEndMessages(winnerNames) {
    Console.print(`최종 우승자 : ${winnerNames.join(", ")}`);
  }
}
