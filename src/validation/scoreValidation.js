import { Console } from "@woowacourse/mission-utils";
export const validateCarScore = (score, car, index, racecarScores) => {
  if (score <= 4) {
    const dashes = "-".repeat(score);
    return Console.print(`${car} : ${dashes}`);
  } else if (score > 4) {
    Console.print(`${car} : ${score}`);
    racecarScores[index] += score;
  }
};
