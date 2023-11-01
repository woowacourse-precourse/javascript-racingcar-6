import Car from './Car.js';
import { MESSAGE } from './constants/Constant.js';

class RacingCars {
  #cars;

  constructor(carNameList) {
    this.#cars = Array.from(carNameList, (carName) => new Car(carName));
  }

  getMovingLog() {
    const movingLogs = this.#cars.map((car) => car.moveForward());
    return movingLogs.join('\n');
  }

  getWinners() {
    const maxMoveCount = this.#findMaxMoveCount();
    const winners = this.#findSameMoveCount(maxMoveCount);

    return this.#makeWinnerMessage(winners);
  }

  #findMaxMoveCount() {
    return this.#cars.reduce((maxCount, car) => (car.compareWith(maxCount) > 0 ? car : maxCount));
  }

  #findSameMoveCount(maxMoveCount) {
    return this.#cars
      .filter((car) => car.compareIsSame(maxMoveCount))
      .map((car) => car.getCarName());
  }

  #makeWinnerMessage(winners) {
    return `${MESSAGE.finalWinner} ${winners.join(', ')}`;
  }
}

export default RacingCars;
