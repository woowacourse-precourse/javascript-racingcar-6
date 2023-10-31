import CarRaceCondition from "../Condition/CarRaceCondition";

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
}

export default CompareRaceCarResult;
