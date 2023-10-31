import { MissionUtils } from "@woowacourse/mission-utils";

export default class NumberGenerator {
  getRandomNumber () {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber;
  }
}
