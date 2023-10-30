import { Console } from '@woowacourse/mission-utils';

function getNameOfWinners(winners) {
  return winners.map((car) => car.name);
}

class ScoreBoard {
  static announceInterimResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${car.movement}`);
    });
  }

  static announceWinners(winners) {
    const winnersNameList = getNameOfWinners(winners);
    Console.print(`최종 우승자 : ${winnersNameList.join(', ')}`);
  }
}

export default ScoreBoard;
