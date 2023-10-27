import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      this.position += 1;
    }
  }
}

export default Car;
