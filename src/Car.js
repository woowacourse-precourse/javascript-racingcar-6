import { Random } from '@woowacourse/mission-utils';

import { CAN_MOVE_NUMBER } from './constants/constants';

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
    if (Random.pickNumberInRange(0, 9) >= CAN_MOVE_NUMBER) {
      this.moveCount += 1;
    }
  }
}

export default Car;
