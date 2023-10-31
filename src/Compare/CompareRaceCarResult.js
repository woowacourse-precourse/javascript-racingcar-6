import { Console } from "@woowacourse/mission-utils";

class CompareRaceCarResult {
  #raceCars;

  constructor(racecarNames) {
    this.#raceCars = racecarNames;
    Console.print(racecarNames);
  }
}

export default CompareRaceCarResult;
