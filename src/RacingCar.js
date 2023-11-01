import { MissionUtils } from '@woowacourse/mission-utils';

const DECISION_VALUE = 4;

class RacingCar {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= DECISION_VALUE) {
      this.position += 1;
    }
  }
}

export default RacingCar;
