import { MissionUtils } from "@woowacourse/mission-utils";

export class Winner {
  gameWinners(cars) {
    const maxMovement = Math.max(...cars.map((car) => car.getMovement()));
    return cars.filter((car) => car.getMovement() === maxMovement).map((car) => car.getName());
  }

  printWinners(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}