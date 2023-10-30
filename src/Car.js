import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  moveFoward() {
    const number = Random.pickNumberInRange(0, 9);

    if (number >= 4) {
      this.moveCount += 1;
    }
  }
}

export default Car;
