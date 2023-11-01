import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name.trim();
    this.position = 0;
  }

  static getCondition() {
    return Random.pickNumberInRange(0, 9);
  }

  move(carCondition) {
    const FORWARD_CONDITION = 4;
    if (carCondition >= FORWARD_CONDITION) {
      this.position += 1;
    }
  }
}

export default Car;
