import { Random, Console } from '@woowacourse/mission-utils';

class Car {
  constructor(carName) {
    this.carName = carName;
    this.count = 0;
    this.state = [];
  }

  move() {
    const number = Random.pickNumberInRange(0, 9);
    if (number >= 4) {
      this.count++;
    }
    this.state.push('-'.repeat(this.count));
  }
}

export default Car;
