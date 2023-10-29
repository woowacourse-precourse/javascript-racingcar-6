import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants.js";

const initRaceResult = (raceCars) => {
  const carsResult = {};

  raceCars.forEach((car) => (carsResult[car] = ""));

  return carsResult;
};

const updateRaceResult = (raceCars, carsResult) => {
  raceCars.forEach((car) => {
    const random_number = Random.pickNumberInRange(0, 9);
    if (random_number >= 4) {
      carsResult[car] += "-";
    }
  });
};

const printRaceResult = (raceCars, race_count) => {
  Console.print(`\n${MESSAGE.OUTPUT_RESULT}`);

  const raceResult = initRaceResult(raceCars);

  for (let i = 0; i < race_count; i++) {
    updateRaceResult(raceCars, raceResult);

    for (let [car, path] of Object.entries(raceResult)) {
      Console.print(`${car} : ${path}`);
    }
    Console.print("");
  }

  return raceResult;
};

export default printRaceResult;
