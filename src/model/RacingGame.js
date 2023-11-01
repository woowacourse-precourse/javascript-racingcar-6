import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../constants/gameMessage.js";
import SYMBOLS from "../constants/symbols.js";
import NameToKeyValueConverter from "../controller/game/NameToKeyValueConverter.js";
import HyphenAdd from "../controller/game/HyphenAdd.js";
import gameInProgress from "../controller/game/GameInProgress.js";
import Winner from "../controller/game/Winner.js";

class RacingGame {
  constructor() {
    this.nameToKeyValueConverter = new NameToKeyValueConverter();
    this.hyphenAdd = new HyphenAdd();
    // this.gameInProgress = new GameInProgress();
    this.winner = new Winner();
  }

  racing(nameSplit, number) {
    Console.print(`${SYMBOLS.emptyString}`);
    const keyValue = this.nameToKeyValueConverter.converter(nameSplit);
    Console.print(`${GAME_MESSAGE.result}`);
    for (let i = 0; i < number; i++) {
      this.performRace(keyValue);
      Console.print(SYMBOLS.emptyString);
    }
    return this.winner.whoWinner(keyValue);
  }
  performRace(keyValue) {
    this.hyphenAdd.Add(keyValue);
    gameInProgress(keyValue);
  }
}
export default RacingGame;
