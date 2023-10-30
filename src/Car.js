import { MIN_MOVEMENT, MOVEMENT_FORWARD } from './constants/constants.js';

class Car {
  #movement = '';

  constructor(name) {
    this.name = name;
  }

  get movement() {
    return this.#movement;
  }

  move(number) {
    if (number >= MIN_MOVEMENT) {
      this.movement += MOVEMENT_FORWARD;
      return true;
    }
    return false;
  }
}

export default Car;
