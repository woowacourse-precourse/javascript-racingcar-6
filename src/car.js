import { Random } from '@woowacourse/mission-utils';
import { BaseCar } from './CarInterface.js';

export class Car extends BaseCar {
  constructor(name) {
    super();
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
