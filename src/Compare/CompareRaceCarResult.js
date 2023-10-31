import { Console } from "@woowacourse/mission-utils";

class CompareRaceCarResult {
  #raceCars;

  constructor(racecarNames) {
    this.#raceCars = racecarNames
      .split(",")
      .map((racecarname) => new CarRaceCondition(racecarname));
  }
}

export default CompareRaceCarResult;
