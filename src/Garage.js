import Car from './Car';
import {
  printStartRaceResult,
  printCarsForwardDistance,
  printWinners,
} from './utils/print';

class Garage {
  #cars;

  constructor(carNamesArray) {
    this.#cars = carNamesArray.map((carName) => new Car(carName));
  }

  runCars() {
    this.#cars.forEach((car) => {
      car.runRandomAction();
    });
    return this;
  }

  printCarsAfterRun() {
    printCarsForwardDistance(this.#cars);

    return this;
  }

  printCarRaceWinners() {
    printWinners(this.#getWinners());
  }

  #getWinners() {
    return this.#cars
      .filter(
        (car) => car.getForwardDistance() === this.#calculateLongestDistance(),
      )
      .map((car) => car.getCarName());
  }

  #calculateLongestDistance() {
    return Math.max(...this.#cars.map((car) => car.getForwardDistance()));
  }

  static printStartRaceResult() {
    printStartRaceResult();
  }
}

export default Garage;
