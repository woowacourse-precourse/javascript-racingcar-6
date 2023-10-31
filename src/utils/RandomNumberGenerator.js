import { Random } from "@woowacourse/mission-utils";
import { STATIC_NUMBER } from "../static/Static.js";

const RandomNumberGenerator = {
  generate() {
    const number = Random.pickNumberInRange(
      STATIC_NUMBER.randomMinNumber,
      STATIC_NUMBER.randomMaxNumber
    );
    return number;
  },
};
export default RandomNumberGenerator;
