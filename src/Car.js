import { Random } from '@woowacourse/mission-utils';
import { GO_CONDITION_MINIMUM_VALUE } from './constants.js';

export class Car {
  #position = 0;

  #name;

  constructor(name) {
    this.#name = name;
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }

  randomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  canGo() {
    return this.randomNumber() >= GO_CONDITION_MINIMUM_VALUE;
  }

  goOrStop() {
    if (this.canGo()) {
      this.#increasePosition();
      return;
    }
  }

  #increasePosition() {
    this.#position += 1;
  }
}
