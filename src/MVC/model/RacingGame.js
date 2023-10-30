import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../Constants/gameMessage.js";
import SYMBOLS from "../Constants/symbols.js";

class RacingGameController {
  racing(number, nameSplit) {
    Console.print(`${SYMBOLS.emptyString}`);
    const keyValue = this.nameToKeyValueConverter(nameSplit);
    Console.print(`${GAME_MESSAGE.result}`);
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
}
export default RacingGameController;
