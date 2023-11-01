import { Random } from "@woowacourse/mission-utils";
import { STATIC_NUMBER } from "../static/Static.js";

const RandomNumberGenerator = {
  generate() {
    return Random.pickNumberInRange(
      STATIC_NUMBER.randomMinNumber,
      STATIC_NUMBER.randomMaxNumber
    );
  },
};
export default RandomNumberGenerator;
