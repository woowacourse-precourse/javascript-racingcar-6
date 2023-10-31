import { Console, Random } from "@woowacourse/mission-utils";
import * as messages from "./constants/messages";

export function playRaceRound(game) {
  while (game.tryCount--) {
    Console.print(messages.EXECUTION_RESULT_PROMPT);
    game.cars.forEach((car) => {
      const randomValue = Random.pickNumberInRange(0, 9);
      if (randomValue >= 4) {
        car.moveForward(Number(randomValue));
      }
      car.printPosition();
    });
  }
}

export function printWinners(game) {
  let maxDistance = -1;
  let winners = [];

  game.cars.forEach((car) => {
    if (car.getDistance() === maxDistance) {
      winners.push(car);
    }
    if (car.getDistance() > maxDistance) {
      winners = [];
      maxDistance = car.getDistance();
      winners.push(car);
    }
  });
  if (winners.length === 1) {
    Console.print(messages.FINAL_WINNER_SINGLE(winners[0].name));
    return;
  }
  const winnerNames = winners.map((car) => car.name).join(",");
  Console.print(messages.FINAL_WINNER_MULTIPLE(winnerNames));
}
