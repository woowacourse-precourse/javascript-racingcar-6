import { MissionUtils } from "@woowacourse/mission-utils";
import { MAGIC_NUM } from "../constants/Constants.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    if (
      MissionUtils.Random.pickNumberInRange(...MAGIC_NUM.RANDOM_RANGE) >=
      MAGIC_NUM.MOVE_THRESHOLD
    ) {
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
