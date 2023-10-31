import { Random } from "@woowacourse/mission-utils";

const RACE_THRESHOLD = 4;
const RANDOM_MIN = 0;
const RANDOM_MAX = 9;

export default class Race {
  race(names, rounds, display) {
    let results = this.initializeResults(names);
    for (let i = 0; i < rounds; i++) {
      results = this.runRound(results);
      display.displayRoundResults(results);
    }
    display.displayWinners(results);
  }

  initializeResults(names) {
    let results = {};
    names.forEach(name => results[name] = "");
    return results;
  }

  runRound(results) {
    const updatedResults = { ...results };
    for (let name in results) {
      if (Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX) >= RACE_THRESHOLD) {
        updatedResults[name] += "-";
      }
    }
    return updatedResults;
  }
}