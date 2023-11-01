import { Cars } from './Cars.js';
import { getGreatestNumber } from '../utils.js';
import { printResult } from '../output/result.js';
import { Output } from '../interface/Output.js';

export class Race {
  #tryInput;
  #cars;

  constructor(cars, tryInput) {
    this.#cars = cars;
    this.#tryInput = tryInput;
  }

  start() {
    let count = 0;
    Output('');
    Output('실행 결과');

    while (count < Number(this.#tryInput)) {
      count += 1;
      this.#cars.move();
      Output('');
    }
  }

  end() {
    const greatestPosition = this.getGreatestPosition(this.#cars.getPositions());
    const winners = this.getWinners(this.#cars, greatestPosition);

    printResult.final(winners);
  }

  getGreatestPosition(positions) {
    return getGreatestNumber(positions);
  }

  getWinners(cars, greatestPosition) {
    return cars
      .getList()
      .filter((car) => car.getPosition() === greatestPosition)
      .map((car) => car.getName());
  }
}
