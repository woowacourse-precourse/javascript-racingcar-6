import Car from './Car.js';

class RacingCars {
  #cars;

  constructor(carNameList) {
    this.#cars = Array.from(carNameList, (carName) => new Car(carName));
  }

  getRacingCarsMovingLog() {
    const movingLogs = this.#cars.map((car) => car.moveForward());
    return movingLogs.join('\n');
  }

  getWinners() {
    const maxMoveCount = this.#findMaxMoveCount();
    return this.#findSameMoveCount(maxMoveCount);
  }

  #findMaxMoveCount() {
    return this.#cars.reduce((maxCount, car) => (car.compareWith(maxCount) > 0 ? car : maxCount));
  }

  #findSameMoveCount(maxMoveCount) {
    return this.#cars
      .filter((car) => car.compareIsSame(maxMoveCount))
      .map((car) => car.getCarName());
  }
}

export default RacingCars;
