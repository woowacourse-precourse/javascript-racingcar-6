import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants.js";

const printRaceWinner = (raceResult) => {
  const winner = [];
  const maxLength = Math.max(
    ...Object.values(raceResult).map((path) => path.length)
  );

  for (let [car, path] of Object.entries(raceResult)) {
    if (path.length === maxLength) {
      winner.push(car);
    }
  }

  Console.print(`${MESSAGE.OUTPUT_WINNER} : ${winner.join(", ")}`);
};

export default printRaceWinner;
