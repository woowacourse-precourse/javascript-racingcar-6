import { Console } from "@woowacourse/mission-utils";
import getRacingCars from "./input/getRacingCars.js";
import getRacingCount from "./input/getRacingCount.js";
import displayRoundResult from "./display/displayRoundResult.js";
import displayWinner from "./display/displayWinner.js";
import { SYMBOLS, GUIDE_MESSAGES } from "./constants/constants.js";

function racingOneRound(racingCars) {
  racingCars.forEach(racingCar => {
    racingCar.tryRacing();
  });
}

export default async function racingGame() {
  const racingCars = await getRacingCars();
  const racingCount = await getRacingCount();

  Console.print('\n' + GUIDE_MESSAGES.resultGuide);

  for (let trialCount = 0; trialCount < racingCount; trialCount++) {
    racingOneRound(racingCars);
    displayRoundResult(racingCars);
    Console.print(SYMBOLS.roundDivision);
  }

  displayWinner(racingCars);
}

racingGame();