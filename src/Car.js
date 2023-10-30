import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name, distance) {
    this.name = name;
    this.distance = distance;
  }
  go() {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      this.distance++;
    }
  }
  getName() {
    return this.name;
  }
  getDistance() {
    return this.distance;
  }
}

export default Car;
