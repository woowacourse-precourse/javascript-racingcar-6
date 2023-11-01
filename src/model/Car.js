import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  moveForward() {
    const number = Random.pickNumberInRange(0, 9);

    if (number >= 4) {
      this.moveCount += 1;
    }
  }
}

export default Car;
