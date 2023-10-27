import { MissionUtils } from "@woowacourse/mission-utils";

class Random {
  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
}

export default Random;
