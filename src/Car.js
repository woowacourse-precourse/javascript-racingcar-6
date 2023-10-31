import { MissionUtils } from '@woowacourse/mission-utils';
import { MIN_RANGE, MAX_RANGE, MOVEMENT } from './constants.js';

class Car {
  constructor(carName) {
    this.carName = carName;
    this.position = '';
  }

  move() {
    let randomNum = MissionUtils.Random.pickNumberInRange(MIN_RANGE, MAX_RANGE);
    if (randomNum >= 4) {
        this.position += MOVEMENT;
    }
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.carName;
  }
}

export default Car;