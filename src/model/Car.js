import { MOVABLE_NUMBER } from '../constants.js';

class Car {
  #name;

  #step;

  constructor(name) {
    this.#name = name;
    this.#step = 0;
  }

  getName() {
    return this.#name;
  }

  getStep() {
    return this.#step;
  }

  static canMove(number) {
    return number >= MOVABLE_NUMBER;
  }

  run(number) {
    if (Car.canMove(number)) this.#step += 1;
  }
}

export default Car;
