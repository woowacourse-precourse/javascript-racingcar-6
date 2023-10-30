import RacingCar from "./RacingCar.js";
import RandomNumberGenerator from "../utils/RandomNumberGenerator.js";
import { StaticNumber } from "../static/Static.js";

class RacingCars {
  #cars;
  #times;
  #finalDistance = [];
  #winners = [];

  constructor(inputNames) {
    this.#cars = inputNames.split(",").map((name) => new RacingCar(name));
  }

  setRacingTimes(inputTimes) {
    this.#times = Number(inputTimes);
  }

  getRacingTimes() {
    return this.#times;
  }

  setCarsMoving() {
    for (let i = 0; i < this.#cars.length; i++) {
      const randomNumber = RandomNumberGenerator.generate();
      if (randomNumber >= StaticNumber.CAN_MOVE_CONDITION) this.#cars[i].move();
    }
  }

  getCarsMoving() {
    return this.#cars.map((car) => [car.getName(), car.getCurrentDistance()]);
  }

  getMaxDistance() {
    this.#cars.map((car) => {
      this.#finalDistance.push(car.getCurrentDistance());
    });
    return Math.max(...this.#finalDistance);
  }

  getWinners(maxDistance) {
    this.#cars.map((car) => {
      if (car.getCurrentDistance() === maxDistance)
        this.#winners.push(car.getName());
    });
    return this.#winners;
  }
}

export default RacingCars;
