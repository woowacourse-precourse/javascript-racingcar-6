import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants.js";

const initRaceResult = (race_cars) => {
  const cars_result = {};

  race_cars.forEach((car) => (cars_result[car] = ""));

  return cars_result;
};

const updateRaceResult = (race_cars, cars_result) => {
  race_cars.forEach((car) => {
    const random_number = Random.pickNumberInRange(0, 9);
    if (random_number >= 4) {
      cars_result[car] += "-";
    }
  });
};

const printRaceResult = (race_cars, race_count) => {
  Console.print(`\n${MESSAGE.OUTPUT_RESULT}`);

  const race_result = initRaceResult(race_cars);

  for (let i = 0; i < race_count; i++) {
    updateRaceResult(race_cars, race_result);

    for (let [car, path] of Object.entries(race_result)) {
      Console.print(`${car} : ${path}`);
    }
    Console.print("");
  }

  return race_result;
};

export default printRaceResult;
