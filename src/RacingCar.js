import { NUMBER_RANGE, RANDOM_THRESHOLD } from './constants.js';
import { generateRandomNumber } from './utils.js';

class RacingCar {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const random = generateRandomNumber(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
    if (random >= RANDOM_THRESHOLD) {
      this.#position++;
    }
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}

export default RacingCar;
