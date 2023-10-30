import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  createRandomNumber = () => {
    const number = Random.pickNumberInRange(1, 9);
    return number;
  };

  moveForwardIfPossible() {
    const number = this.createRandomNumber();
    if (number >= 4) {
      this.position++;
    }
  }

  displayPosition() {
    return '-'.repeat(this.position);
  }
}
export { Car };
