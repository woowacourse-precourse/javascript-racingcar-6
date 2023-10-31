import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      this.distance += 1;
    }
  }
}

export default Car;
