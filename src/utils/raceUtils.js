import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { GameSetting } from "../constants/gameConstants.js";

export class RaceUtils {
  static generateRaceResults(carCount) {
    let results = [];
    for (let i = 0; i < carCount; i++) {
      let number = MissionUtils.Random.pickNumberInRange(0, 9);
      results.push(GameSetting.raceSuccessLimit < number);
    }
    return results;
  }

  static addRaceStep(RaceResults, Cars) {
    for (let i = 0; i < RaceResults.length; i++) {
      if (RaceResults[i]) Cars[i].trackStatus += "-";
    }
  }
  static formatRaceResult(Car) {
    return `${Car.name} : ${Car.trackStatus}`;
  }

  static outputRaceResults(Cars) {
    Cars.forEach(Car => {
      Console.print(`${Car.name} : ${Car.trackStatus}\n`)
    });
  }
}
