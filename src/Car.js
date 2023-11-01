import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  chooseGoOrStop() {
    const number = MissionUtils.Random.pickNumberInRange(0, 9);

    if (number >= 4) {
      return true;
    }

    return false;
  }
}

export default Car;
