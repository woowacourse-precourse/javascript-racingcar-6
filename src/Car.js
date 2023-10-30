import { Random, Console } from '@woowacourse/mission-utils';
import { NUMERIC } from './constants/index.js';

class Car {
  /**
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const { from, to } = NUMERIC.RANDOM_RANGE;
    const determinant = Random.pickNumberInRange(from, to);

    if (determinant >= NUMERIC.FORWARD_THRESHOLD) this.position += 1;
  }

  getPosition() {
    return this.position;
  }

  toString() {
    return this.name;
  }

  print() {
    Console.print(`${this.name}: ${'-'.repeat(this.position)}`);
  }
}

export default Car;
