import { Console } from '@woowacourse/mission-utils';

class ReturnWinner {
  static findWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.getPosition()));
    return cars.filter((car) => car.getPosition() === maxPosition);
  }

  static printWinners(winners) {
    const winnerNames = winners.map((car) => car.getName()).join(', ');
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default ReturnWinner;
