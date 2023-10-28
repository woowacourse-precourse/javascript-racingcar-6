import { Console, Random } from '@woowacourse/mission-utils';

import { MOVE, RESULT_MESSAGE } from './constants/constants.js';

class Race {
  constructor(cars, round) {
    this.round = round;
    this.cars = cars;
  }

  startRace() {
    Console.print(RESULT_MESSAGE);
    for (let i = 0; i < this.round; i++) {
      this.playRound();
      this.printRoundResult();
    }
  }

  playRound() {
    this.cars.forEach((car) => {
      if (this.canMove()) {
        car.move();
      }
    });
  }

  canMove() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  printRoundResult() {
    this.cars.forEach((car) => {
      Console.print(`${car.getName()} : ${MOVE.repeat(car.getMoveCount())}`);
    });
    Console.print('');
  }
}

export default Race;
