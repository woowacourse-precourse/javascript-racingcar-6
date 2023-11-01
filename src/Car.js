import { Random } from '@woowacourse/mission-utils';

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
    if (Random.pickNumberInRange(0, 9) >= 4) {
      this.moveCount += 1;
    }
  }
}

export default Car;