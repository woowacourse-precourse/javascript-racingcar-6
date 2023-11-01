import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }
    this.name = name;
    this.distance = 0;
  }

  move() {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      this.distance += 1;
    }
  }

  getDistance() {
    return this.distance;
  }

  getName() {
    return this.name;
  }
}

export default Car;
