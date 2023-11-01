import { Console } from '@woowacourse/mission-utils';
import { MOVE, RESULT_MESSAGE, FINAL_WINNER } from './Constants.js';

class PlayRacing {
  constructor(cars, round) {
    this.round = round;
    this.cars = cars;
  }

  start() {
    Console.print(RESULT_MESSAGE);
    for (let i = 0; i < this.round; i++) {
      this.playRound();
      this.printRoundResult();
    }
    Console.print(FINAL_WINNER + this.getWinners());
  }

  playRound() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  printRoundResult() {
    this.cars.forEach((car) => {
      Console.print(`${car.getName()} : ${MOVE.repeat(car.getMoveCount())}`);
    });
    Console.print('');
  }

  getWinners() {
    const moveCountArr = this.cars.map((car) => car.getMoveCount());
    const maxMoveCount = Math.max(...moveCountArr);

    const winners = this.cars
      .filter((car) => car.getMoveCount() === maxMoveCount)
      .map((car) => car.getName());

    return winners.join(', ');
  }
}

export default PlayRacing;
