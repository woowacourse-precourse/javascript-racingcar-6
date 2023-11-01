import { Random } from '@woowacourse/mission-utils';
import { MOVE_NUMBER } from '../utils/constants.js';

class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    if (Random.pickNumberInRange(0, 9) >= MOVE_NUMBER) {
      this.#position += 1;
    }
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
