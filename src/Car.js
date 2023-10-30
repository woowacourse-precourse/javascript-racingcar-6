import {
  MIN_MOVEMENT,
  MOVEMENT_FORWARD,
} from './constants/carMovementConstants.js';

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
      this.#movement += MOVEMENT_FORWARD;
    }
  }
}

export default Car;
