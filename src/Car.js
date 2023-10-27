import { CONSTANTS } from './constants/index.js';
import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const isMoving = Random.pickNumberInRange(0, 9) >= CONSTANTS.FORWARD_THRESHOLD;

    if (isMoving) {
      this.position += 1;
    }
  }
}

export default Car;
