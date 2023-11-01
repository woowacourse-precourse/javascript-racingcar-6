import { RANDOM_THRESHOLD } from './constants.js';

class RacingCar {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move(number) {
    if (number >= RANDOM_THRESHOLD) {
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
