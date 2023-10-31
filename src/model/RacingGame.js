import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../constants/gameMessage.js";
import SYMBOLS from "../constants/symbols.js";
import NameToKeyValueConverter from "../controller/game/nameToKeyValueConverter.js";
import HyphenAdd from "../controller/game/hyphenAdd.js";
import GameInProgress from "../controller/game/gameInProgress.js";
import Winner from "../controller/game/winner.js";

class RacingGame {
  constructor() {
    this.nameToKeyValueConverter = new NameToKeyValueConverter();
    this.hyphenAdd = new HyphenAdd();
    this.gameInProgress = new GameInProgress();
    this.winner = new Winner();
  }

  racing(nameSplit, number) {
    Console.print(`${SYMBOLS.emptyString}`);
    const keyValue = this.nameToKeyValueConverter.converter(nameSplit);
    Console.print(`${GAME_MESSAGE.result}`);
    for (let i = 0; i < number; i++) {
      this.hyphenAdd.Add(keyValue);
      this.gameInProgress.progress(keyValue);
      Console.print(SYMBOLS.emptyString);
    }
    return this.winner.whoWinner(keyValue);
  }
}
export default RacingGame;
