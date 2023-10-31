import { Console } from "@woowacourse/mission-utils";
import getRacingCars from "./input/getRacingCars.js";
import getRacingCount from "./input/getRacingCount.js";

function racingOneRound(racingCars) {
  racingCars.forEach(racingCar => {
    racingCar.tryRacing();
  });
}

function displayRoundResult(racingCars) {
  racingCars.forEach(racingCar => {
    const name = racingCar.name;
    const movingDistance = racingCar.movingDistance;
    Console.print(`${name} : ${movingDistance}`);
  })
  Console.print('\n');
}

export default async function racingGame() {
  const racingCars = await getRacingCars();
  const racingCount = await getRacingCount();

  Console.print('\n실행 결과');

  for (let trialCount = 0; trialCount < racingCount; trialCount++) {
    racingOneRound(racingCars);
    displayRoundResult(racingCars);
  }

}

racingGame();