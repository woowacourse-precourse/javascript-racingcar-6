import { Random } from "@woowacourse/mission-utils";
import { StaticNumber } from "../static/Static.js";

const RandomNumberGenerator = {
  generate() {
    const number = Random.pickNumberInRange(
      StaticNumber.RANDOM_MIN_NUMBER,
      StaticNumber.RANDOM_MAX_NUMBER
    );
    return number;
  },
};
export default RandomNumberGenerator;
