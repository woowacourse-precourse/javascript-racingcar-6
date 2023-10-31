import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../Constants/gameMessage.js";
import SYMBOLS from "../Constants/symbols.js";
import nameToKeyValueConverter from "../controller/game/nameToKeyValueConverter.js";
import HyphenAdd from "../controller/game/HyphenAdd.js";
import gameInProgress from "../controller/game/gameInProgress.js";
import Winner from "../controller/game/Winner.js";

class RacingGame {
  constructor() {
    this.hyphenAdd = new HyphenAdd();
    this.winner = new Winner();
  }

  racing(nameSplit, number) {
    Console.print(`${SYMBOLS.emptyString}`);
    const keyValue = nameToKeyValueConverter(nameSplit);
    Console.print(`${GAME_MESSAGE.result}`);
    for (let i = 0; i < number; i++) {
      this.hyphenAdd.Add(keyValue);
      gameInProgress(keyValue);
      Console.print(SYMBOLS.emptyString);
    }
    return this.winner.whoWinner(keyValue);
  }
}
export default RacingGame;
