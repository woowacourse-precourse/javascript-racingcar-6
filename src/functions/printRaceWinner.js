import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants.js";

const printRaceWinner = (race_result) => {
  const winner = [];
  const max_length = Math.max(
    ...Object.values(race_result).map((path) => path.length)
  );

  for (let [car, path] of Object.entries(race_result)) {
    if (path.length === max_length) {
      winner.push(car);
    }
  }

  Console.print(`${MESSAGE.OUTPUT_WINNER} : ${winner.join(", ")}`);
};

export default printRaceWinner;
