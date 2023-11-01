import { MissionUtils } from "@woowacourse/mission-utils";
import LIMIT from "../constants/rule/gameRule.js";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomValue = MissionUtils.Random.pickNumberInRange(
      LIMIT.RANDOM_RANGE.FIRST,
      LIMIT.RANDOM_RANGE.LAST,
    );

    if (randomValue >= LIMIT.MOVE_VALUE) this.position++;
  }
}

export default Car;
