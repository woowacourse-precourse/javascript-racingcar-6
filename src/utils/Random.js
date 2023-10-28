import { MissionUtils } from "@woowacourse/mission-utils";
import { NUMBER } from "./Constants.js";

class Random {
  static getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(NUMBER.MIN, NUMBER.MAX);
  }
}

export default Random;
