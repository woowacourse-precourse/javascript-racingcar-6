import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) {
      this.distance += 1;
    }
  }
}

export default Car;