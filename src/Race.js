import { Cars } from './Cars.js';
import { Result } from './Result.js';
import { getGreatestNumber } from './utils.js';

export class Race {
  #tryInput;
  #cars;

  constructor(carNames, tryInput) {
    this.#cars = new Cars(carNames);

    this.#tryInput = tryInput;
  }

  start() {
    let count = 0;
    while (count < this.#tryInput) {
      count += 1;
      this.#cars.move();
    }
  }
}
