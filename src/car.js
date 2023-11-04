import { Console, Random } from '@woowacourse/mission-utils';

export class Car {
  constructor(name) {
    this.name = name;
    this.status = '';
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.status += '-';
    }
  }

  getCarStatus() {
    return this.status;
  }

  getCarName() {
    return this.name;
  }
}
