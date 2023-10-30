import { Console, Random } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../Constants/gameMessage.js";
import SYMBOLS from "../Constants/symbols.js";
import NUMBERS from "../Constants/numbers.js";

class RacingGame {
  racing(nameSplit, number) {
    Console.print(`${SYMBOLS.emptyString}`);
    const keyValue = this.nameToKeyValueConverter(nameSplit);
    Console.print(`${GAME_MESSAGE.result}`);
    for (let i = 0; i < number; i++) {
      this.hyphenAdd(keyValue);
    }
  }

  nameToKeyValueConverter(name) {
    const nameKeyValues = [];
    name.forEach((value) => {
      const keyValue = {};
      keyValue[value] = SYMBOLS.emptyString;
      nameKeyValues.push(keyValue);
    });
    return nameKeyValues;
  }
  hyphenAdd(keyValue) {
    for (const randomNumber of keyValue) {
      const name = Object.keys(randomNumber)[0];
      if (Random.pickNumberInRange(0, 9) >= NUMBERS.four) {
        randomNumber[name] += SYMBOLS.hyphen;
      }
    }
  }
}
export default RacingGame;
