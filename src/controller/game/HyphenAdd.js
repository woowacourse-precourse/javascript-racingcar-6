import SYMBOLS from "../../constants/symbols.js";
import { Random } from "@woowacourse/mission-utils";
import NUMBERS from "../../constants/numbers.js";

class HyphenAdd {
  Add(keyValue) {
    for (const randomNumber of keyValue) {
      const name = Object.keys(randomNumber)[0];
      if (Random.pickNumberInRange(0, 9) >= NUMBERS.four) {
        randomNumber[name] += SYMBOLS.hyphen;
      }
    }
  }
}

export default HyphenAdd;
