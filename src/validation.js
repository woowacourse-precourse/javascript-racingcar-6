import message from "./message.js";
import { Console, Random } from "@woowacourse/mission-utils";

export const validateCarNames = (cars) => {
  cars.map((el) => {
    if (el.length > 5 || el.length <= 0) {
      throw new Error(message.INPUT_CARNAME_ERROR);
    }
  });
};

export const validateAndDisplayResult = (racecars, racecarScores) => {
  racecars.map((car, index) => {
    const SCORE = Random.pickNumberInRange(0, 9);
    //
    if (SCORE <= 4) {
      const dashes = "-".repeat(SCORE);
      return Console.print(`${car} : ${dashes}`);
    } else if (SCORE > 4) {
      Console.print(`${car} : ${SCORE}`);
      racecarScores[index] += SCORE;
    } else {
      throw new Error("[ERROR]");
    }
  });
};

export const validateDisplayWinner = (racecarScores, cars) => {
  const highestScore = Math.max(...racecarScores);
  const highestScoringCars = cars.filter(
    (_, carIndex) => racecarScores[carIndex] === highestScore
  );

  Console.print(
    "최종 우승자 : " +
      (highestScoringCars.length === 1
        ? highestScoringCars
        : highestScoringCars.join(", "))
  );
};
