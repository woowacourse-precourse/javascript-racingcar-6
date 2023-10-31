import { NUM_RANGE } from "./constants/Number.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.move_times = 0;
    this.decision_number = 0;
    this.dash = "-";
  }
  pickRandomNumber() {
    this.decision_number = MissionUtils.Random.pickNumberInRange(0, 9);
  }
  moveOneStep() {
    if (this.decision_number >= NUM_RANGE.move_minimum) {
      this.move_times++;
    }
  }
}

export default Car;
