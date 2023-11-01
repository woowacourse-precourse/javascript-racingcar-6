import { Console } from '@woowacourse/mission-utils';


class Race {
  constructor(cars, round) {
    this.round = round;
    this.cars = cars;
  }

  start() {
    Console.print('\n실행 결과');
    for (let i = 0; i < this.round; i += 1) {
      this.playRound();
      this.printRoundResult();
    }
    Console.print(`최종 우승자 : ${this.checkWinners()}`);
  }

  playRound() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  printRoundResult() {
    this.cars.forEach((car) => {
        const moveCountStr = '-'.repeat(car.getMoveCount());
        Console.print(`${car.getName()} : ${moveCountStr}`);
    });
    Console.print('');
  }

  checkWinners() {
    const moveCountArr = this.cars.map((car) => car.getMoveCount());
    const maxMoveCount = Math.max(...moveCountArr);

    const winners = this.cars
      .filter((car) => car.getMoveCount() === maxMoveCount)
      .map((car) => car.getName());

    return winners.join(', ');
  }
}

export default Race;