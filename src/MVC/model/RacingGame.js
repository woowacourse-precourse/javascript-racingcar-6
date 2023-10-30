import { Console, Random } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../Constants/gameMessage.js";
import SYMBOLS from "../Constants/symbols.js";
import nameToKeyValueConverter from "../controller/game/nameToKeyValueConverter.js";
import hyphenAdd from "../controller/game/hyphenAdd.js";
import gameInProgress from "../controller/game/gameInProgress.js";
import winner from "../controller/game/winner.js";

class RacingGame {
  racing(nameSplit, number) {
    Console.print(`${SYMBOLS.emptyString}`);
    const keyValue = nameToKeyValueConverter(nameSplit);
    Console.print(`${GAME_MESSAGE.result}`);
    for (let i = 0; i < number; i++) {
      hyphenAdd(keyValue);
      gameInProgress(keyValue);
      Console.print(SYMBOLS.emptyString);
    }
    return winner(keyValue);
  }
}
export default RacingGame;
