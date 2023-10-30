import SYMBOLS from "../../Constants/symbols.js";
import { Random } from "@woowacourse/mission-utils";
import NUMBERS from "../../Constants/numbers.js";

const hyphenAdd = (keyValue) => {
  for (const randomNumber of keyValue) {
    const name = Object.keys(randomNumber)[0];
    if (Random.pickNumberInRange(0, 9) >= NUMBERS.four) {
      randomNumber[name] += SYMBOLS.hyphen;
    }
  }
};

export default hyphenAdd;
