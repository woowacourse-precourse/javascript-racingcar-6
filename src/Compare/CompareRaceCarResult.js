import CarRaceCondition from "../Condition/CarRaceCondition";
import CarForwardRandomNumberGenerator from "../utils/CarForwardRandomNumberGenerator";
import { STATIC_NUMBER } from "../Constant/constant";

class CompareRaceCarResult {
  #raceCars;
  #attempts;
  #finalForwardDistance = [];
  #winners = [];

  constructor(racecarNames) {
    this.#raceCars = racecarNames
      .split(",")
      .map((racecarname) => new CarRaceCondition(racecarname));
  }

  setAttempts(inputAttempts) {
    this.#attempts = Number(inputAttempts);
  }

  getAttempts() {
    return this.#attempts;
  }

  setMoveForwardCondition() {
    this.#raceCars.map((raceCar) => {
      const randomNumber =
        CarForwardRandomNumberGenerator.RandomNumberGenerator();
      if (randomNumber >= STATIC_NUMBER.canMoveForwardCondition)
        raceCar.moveForward();
    });
  }

  getCurrentPosition() {
    return this.#raceCars.map((raceCar) => [
      raceCar.getRaceCarName(),
      raceCar.getRaceCarForwardDistance(),
    ]);
  }

  getMaxForwardDistance() {
    this.#raceCars.map((raceCar) => {
      this.#finalForwardDistance.push(raceCar.getRaceCarForwardDistance());
    });
    return Math.max(...this.#finalForwardDistance);
  }

  getWinners() {
    this.#raceCars.map((raceCar) => {
      if (raceCar.getRaceCarForwardDistance() === this.getMaxForwardDistance())
        this.#winners.push(raceCar.getRaceCarName());
    });
    return this.#winners;
  }
}

export default CompareRaceCarResult;
