import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const random = Random.pickNumberInRange(0, 9);
    if (random >= 4) {
      this.position += 1;
    }
  }
}

export default Car;
