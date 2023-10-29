import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  name = "";

  constructor(carName) {
    this.name = carName;
  }

  static randomNumGenerate() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNum;
  }
}

export default Car;
