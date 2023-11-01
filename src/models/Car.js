import { MissionUtils } from "@woowacourse/mission-utils";
import {
  ERROR_MESSAGE,
  MOVE_THRESHOLD,
  MAX_CAR_NAME_LENGTH,
} from "../constants.js";

class Car {
  constructor(name) {
    this.validateName(name);
    this.name = name;
    this.position = 0;
  }

  validateName(name) {
    if (name.length > MAX_CAR_NAME_LENGTH) {
      throw new Error(
        `[ERROR] ${ERROR_MESSAGE.invalidLength(MAX_CAR_NAME_LENGTH)}`
      );
    }

    if (name === "") {
      throw new Error(`[ERROR] ${ERROR_MESSAGE.isCarNameNull}`);
    }
  }

  attemptMove() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomValue >= MOVE_THRESHOLD) {
      this.move();
    }
  }

  move() {
    this.position += 1;
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }
}

export default Car;
