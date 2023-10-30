import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../constants";
class Car {
  constructor(name) {
    this.validateName(name);
    this.name = name;
    this.position = 0;
  }

  validateName(name) {
    if (name.length > 5) {
      throw new Error(`[ERROR] ${ERROR_MESSAGE.invalidLength(5)}`);
    }

    if (name === "") {
      throw new Error(`[ERROR] ${ERROR_MESSAGE.isCarNameNull}`);
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
