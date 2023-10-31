import { Random } from '@woowacourse/mission-utils';
import { GO_CONDITION_MINIMUM_VALUE, RANDOM_NUMBER_RANGE } from './constants.js';

export class Car {
  #position = 0;

  #name;

  randomNumber = Random.pickNumberInRange(RANDOM_NUMBER_RANGE.MIN, RANDOM_NUMBER_RANGE.MAX);

  constructor(name) {
    this.#name = name;
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }

  movable() {
    return this.randomNumber >= GO_CONDITION_MINIMUM_VALUE;
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
