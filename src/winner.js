import { Console } from '@woowacourse/mission-utils';

export class Winner {
  constructor(cars) {
    this.cars = cars;
  }

  getWinners() {
    const finalCarStatus = this.getFinalCarStatus();
    const maxForwardCount = Math.max(
      ...finalCarStatus.map((car) => car.forworadCount)
    );
    const winnerStatus = finalCarStatus.filter(
      (car) => car.forworadCount === maxForwardCount
    );

    const winner = this.getWinnerName(winnerStatus);

    return winner;
  }

  getFinalCarStatus() {
    return this.cars.map((car) => {
      return {
        name: car.getCarName(),
        forworadCount: car.getCarStatus().length,
      };
    });
  }

  getWinnerName(winnerArray) {
    return winnerArray.map((winner) => winner.name);
  }

  printFinalWinner(winnerArray) {
    Console.print(`최종 우승자 : ${winnerArray.join(', ')}`);
  }
}
