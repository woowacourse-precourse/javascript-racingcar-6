import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../Constants/gameMessage.js";
import SYMBOLS from "../Constants/symbols.js";

class Output {
  static gameInProgressPrint(name, hyphen) {
    Console.print(`${name} : ${hyphen}`);
  }

  static winnerPrint(maxName) {
    Console.print(
      `${GAME_MESSAGE.winner}${maxName.join(SYMBOLS.spaceAndComma)}`
    );
  }
}

export default Output;
