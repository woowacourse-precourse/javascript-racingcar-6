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
}

export default RacingCars;
