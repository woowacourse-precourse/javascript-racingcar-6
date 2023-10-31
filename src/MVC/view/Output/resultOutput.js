import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../../Constants/gameMessage.js";
import SYMBOLS from "../../Constants/symbols.js";

class Output {
  static winnerPrint(result) {
    Console.print(
      `${GAME_MESSAGE.winner}${result.join(SYMBOLS.spaceAndComma)}`
    );
  }
}

export default Output;
