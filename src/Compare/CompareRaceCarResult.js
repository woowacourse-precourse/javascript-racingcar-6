import CarRaceCondition from "../Condition/CarRaceCondition";
import CarForwardRandomNumberGenerator from "../utils/CarForwardRandomNumberGenerator";

class CompareRaceCarResult {
  #raceCars;
  #attempts;

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
      if (randomNumber >= 4) raceCar.moveForward();
    });
  }

  getCurrentPosition() {
    return this.#raceCars.map((raceCar) => [
      raceCar.getRaceCarName(),
      raceCar.getRaceCarForwardDistance(),
    ]);
  }
}

export default CompareRaceCarResult;
