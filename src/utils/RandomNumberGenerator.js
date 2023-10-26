import { Random } from "@woowacourse/mission-utils";
import { StaticNumber } from "../static/Static.js";

const RandomNumberGenerator = {
  generate(size) {
    const numbers = [];
    while (numbers.length < size) {
      const number = Random.pickNumberInRange(
        StaticNumber.RANDOM_MIN_NUMBER,
        StaticNumber.RANDOM_MAX_NUMBER
      );
      numbers.push(number);
    }
    return numbers;
  },
};
export default RandomNumberGenerator;
