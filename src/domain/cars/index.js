import { shouldCarRun } from "../../utils";
import { Car } from "../Car";

export class Cars {
  #cars = [];

  constructor(carNames) {
    this.setCars(carNames);
  }

  setCars(carNames) {
    carNames.forEach((carName) => {
      this.#cars.push(new Car(carName));
    });
  }

  progressRound() {
    this.#cars.forEach((car) => {
      if (shouldCarRun()) car.run();
    });
  }

  getCars() {
    return this.#cars;
  }

  getCarNames() {
    return this.#cars.map((car) => car.name);
  }

  getCarOffsets() {
    return this.#cars.map((car) => car.horizontalOffset);
  }
}
