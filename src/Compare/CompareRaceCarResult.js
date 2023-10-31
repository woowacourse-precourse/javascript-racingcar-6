import CarRaceCondition from "../Condition/CarRaceCondition";

class CompareRaceCarResult {
  #raceCars;

  constructor(racecarNames) {
    this.#raceCars = racecarNames
      .split(",")
      .map((racecarname) => new CarRaceCondition(racecarname));
  }
}

export default CompareRaceCarResult;
