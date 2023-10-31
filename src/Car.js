import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const FORWARD_CONDITION = Random.pickNumberInRange(0, 9) >= 4;
    if (FORWARD_CONDITION) {
      this.position += 1;
    }
  }
}

export default Car;
