import { Console, Random } from "@woowacourse/mission-utils";

export function playRaceRound(game) {
  while (game.tryCount--) {
    Console.print("실행 결과\n");
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
    Console.print(`최종 우승자 : ${winners[0].name}`);
    return;
  }
  const winnerNames = winners.map((car) => car.name).join(",");
  Console.print(`최종 우승자 : ${winnerNames}`);
}
