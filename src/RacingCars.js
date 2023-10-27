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
    const maxCar = this.#findMaxNumOfMoves();
    return this.#findSameScoreCars(maxCar);
  }

  #findMaxNumOfMoves() {
    return this.#cars.reduce((max, car) => (car.compareToMax(max) > 0 ? car : max));
  }

  #findSameScoreCars(maxCar) {
    return this.#cars.filter((car) => car.compareIsSame(maxCar)).map((car) => car.getCarName());
  }
}

export default RacingCars;
