import { MissionUtils } from "@woowacourse/mission-utils";
import { NUMBER } from "./Constants.js";

class RandomNumber {
  static isGreaterThanFour() {
    return RandomNumber.getRandomNumber() >= 4;
  }

  static getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(NUMBER.MIN, NUMBER.MAX);
  }
}

export default RandomNumber;
