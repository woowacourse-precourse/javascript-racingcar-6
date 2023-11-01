import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.movement = '';
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    this.movement += '-'.repeat(randomNumber >= 4 ? 1 : 0);
  }
}

export default Car;