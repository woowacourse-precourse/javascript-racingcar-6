import Car from "./Car.js";
import RandomNumberGenerator from "../utils/RandomNumberGenerator.js";
import { STATIC_NUMBER } from "../static/Static.js";

class RacingCars {
  #cars;
  #finalDistance = [];
  #winners = [];

  constructor(inputNames) {
    this.#cars = inputNames.split(",").map((name) => new Car(name));
  }

  setMoveCondition() {
    this.#cars.map((car) => {
      const randomNumber = RandomNumberGenerator.generate();
      if (randomNumber >= STATIC_NUMBER.canMoveCondition) car.move();
    });
  }

  getCurrentPosition() {
    return this.#cars.map((car) => [car.getName(), car.getDistance()]);
  }

  getMaxDistance() {
    this.#cars.map((car) => {
      this.#finalDistance.push(car.getDistance());
    });
    return Math.max(...this.#finalDistance);
  }

  getWinners() {
    this.#cars.map((car) => {
      if (car.getDistance() === this.getMaxDistance())
        this.#winners.push(car.getName());
    });
    return this.#winners;
  }
}

export default RacingCars;
