import { CONSTANTS } from './constants/index.js';
import { Random } from '@woowacourse/mission-utils';

class Car {
  #position = 0;

  constructor(name) {
    this.name = name;
  }

  move() {
    const isMoving = Car.shouldMove();

    if (isMoving) {
      this.#position += 1;
    }
  }

  getPosition() {
    return this.#position;
  }

  static shouldMove() {
    return Random.pickNumberInRange(0, 9) >= CONSTANTS.FORWARD_THRESHOLD;
  }
}

export default Car;
