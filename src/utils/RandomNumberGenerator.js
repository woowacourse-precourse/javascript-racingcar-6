import { Random } from "@woowacourse/mission-utils";
import { NUMBER } from "./Constant.js";

const RandomNumberGenerator = {
  async getRandomNumber() {
    return await Random.pickNumberInRange(NUMBER.MIN_RANDOM_NUMBER, NUMBER.MAX_RANDOM_NUMBER);
  }
}

export default RandomNumberGenerator;