import { Cars } from './Cars.js';
import { getGreatestNumber } from '../utils.js';
import { printResult } from '../output/result.js';

export class Race {
  #tryInput;
  #cars;

  constructor(cars, tryInput) {
    this.#cars = cars;

    this.#tryInput = tryInput;
  }

  start() {
    let count = 0;
    while (count < this.#tryInput) {
      count += 1;
      this.#cars.move();
    }
  }

  end() {
    const greatestPosition = this.getGreatestPosition();
    const winners = this.getWinners(greatestPosition);

    printResult.final(winners);
  }

  getGreatestPosition() {
    return getGreatestNumber(this.#cars.getPositions());
  }

  getWinners(greatestPosition) {
    return this.#cars
      .getList()
      .filter((car) => car.getPosition() === greatestPosition)
      .map((car) => car.getName());
  }
}
