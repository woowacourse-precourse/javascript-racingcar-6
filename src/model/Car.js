import { Random } from '@woowacourse/mission-utils';
import { NUMBER_FOR_MOVE } from './Constants.js';

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  getName() {
    return this.name;
  }

  getMoveCount() {
    return this.moveCount;
  }

  move() {
    if (Random.pickNumberInRange(0, 9) >= NUMBER_FOR_MOVE) {
      this.moveCount += 1;
    }
  }
}

export default Car;
