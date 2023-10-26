import { Random } from "@woowacourse/mission-utils";
import { StaticString } from "../static/Static.js";

const RandomNumberGenerator = {
  generate(size) {
    const numbers = [];
    while (numbers.length < size) {
      const number = Random.pickNumberInRange(
        StaticString.RANDOM_MIN_NUMBER,
        StaticString.RANDOM_MAX_NUMBER
      );
      numbers.push(number);
    }
    return numbers;
  },
};
export default RandomNumberGenerator;
