import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.validateName(name);
    this.name = name;
    this.position = 0;
  }

  validateName(name) {
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차의 이름은 5자 이하만 가능합니다.");
    }
  }

  move() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) {
      this.position += 1;
    }
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }
}

export default Car;
