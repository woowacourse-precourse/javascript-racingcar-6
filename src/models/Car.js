import { CONSTANTS } from '../constants/index.js';
import { pickRandomNumbInRange } from '../utils/random.js';

class Car {
  #position = 0;

  static #randomRange = Object.freeze({
    from: 0,
    to: 9,
  });

  constructor(name) {
    this.name = name;
  }

  move() {
    const isMoving = Car.shouldCarMove();

    if (isMoving) {
      this.#position += 1;
    }
  }

  getPosition() {
    return this.#position;
  }

  static shouldCarMove() {
    const { from, to } = Car.#randomRange;
    return pickRandomNumbInRange(from, to) >= CONSTANTS.FORWARD_THRESHOLD;
  }
}

export default Car;
