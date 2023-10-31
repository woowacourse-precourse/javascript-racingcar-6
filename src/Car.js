import { Random } from '@woowacourse/mission-utils';
import { MOVE_CONDITION_MINIMUM_VALUE, RANDOM_NUMBER_RANGE } from './constants.js';

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
    return Random.pickNumberInRange(RANDOM_NUMBER_RANGE.MIN, RANDOM_NUMBER_RANGE.MAX);
  }

  movable() {
    return this.randomNumber() >= MOVE_CONDITION_MINIMUM_VALUE;
  }

  moveOrStop() {
    if (this.movable()) {
      this.#increasePosition();
    }
  }

  #increasePosition() {
    this.#position += 1;
  }
}
