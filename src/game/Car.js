import { MOVE_CONDITION_MINIMUM_VALUE } from '../constants.js';

export class Car {
  #position = 0;

  #name;

  #randomGenerator;

  constructor(name, randomGenerator) {
    this.#name = name;
    this.#randomGenerator = randomGenerator;
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }

  randomNumber() {
    return this.#randomGenerator.generate();
  }

  movable() {
    return this.randomNumber() >= MOVE_CONDITION_MINIMUM_VALUE;
  }

  move() {
    if (this.movable()) {
      this.#increasePosition();
    }

    printResult.each(this.#name, this.#position);
  }

  #increasePosition() {
    this.#position += 1;
  }
}
