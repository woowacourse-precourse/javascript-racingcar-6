import message from "../variables/message.js";
import { Console, Random } from "@woowacourse/mission-utils";

export const validateInputRacecar = (racecar) => {
  const regex = /^[a-z]+$/;

  if (racecar.trim() === "") {
    throw new Error(message.INPUT_SPACE_ERROR);
  }

  if (!regex.test(racecar)) {
    throw new Error(message.INPUT_LETTERS_ERROR);
  }

  if (racecar.length === 0 || racecar.length > 5) {
    throw new Error(message.INPUT_CARNAME_ERROR);
  }
};

export const validateRepeatedName = (racecars) => {
  const uniqueCarNames = new Set();
  racecars.forEach((racecar) => {
    if (uniqueCarNames.has(racecar)) {
      throw new Error(`${message.UNIQUE_NAMES_ERROR}`);
    }

    uniqueCarNames.add(racecar);
  });
};

export const validateDisplayWinner = (racecarScores, cars) => {
  const highestScore = Math.max(...racecarScores);
  const highestScoringCars = cars.filter(
    (_, carIndex) => racecarScores[carIndex] === highestScore
  );

  let resultMessage = "최종 우승자 : ";
  if (highestScoringCars.length === 1) {
    resultMessage += highestScoringCars[0];
  } else {
    return Console.print(`우승자 : 없음`);
  }

  if (highestScoringCars.length > 1) {
    resultMessage += highestScoringCars.join(", ");
  }
  Console.print(resultMessage);
};
