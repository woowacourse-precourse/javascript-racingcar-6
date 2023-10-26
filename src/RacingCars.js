import Car from './Car.js';

class RacingCars {
  #cars;

  constructor(carNameList) {
    this.#cars = carNameList.map((carName) => new Car(carName));
  }

  getRacingCarsMovingLog() {
    const movingLogs = this.#cars.map((car) => car.moveForward());
    return movingLogs.join('\n');
  }
  #findMaxNumOfMoves() {
    return this.#cars.reduce((max, car) => (car.compareToMax(max) > 0 ? car : max));
  }
}

export default RacingCars;
