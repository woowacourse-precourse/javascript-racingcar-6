import { Console } from '@woowacourse/mission-utils';
import Car from './Car';

const DITANCE_SYMBOL = '-';

class RacingGame {
  constructor(carNames, totalAttempts) {
    this.cars = carNames.split(',').map((name) => new Car(name));
    this.totalAttempts = totalAttempts;
  }

  playGame() {
    for (let i = 0; i < this.totalAttempts; i++) {
      this.cars.forEach((car) => {
        car.move();
      });
      this.printPositions();
      Console.print('\n');
    }
    this.printWinners();
  }

  printPositions() {
    this.cars.forEach((car) => {
      const distance = car.getPosition();
      const moves = DITANCE_SYMBOL.repeat(distance);
      Console.print(`${car.getName()} : ${moves}\n`);
    });
  }

  printWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winners = this.cars.filter((car) => car.getPosition() === maxPosition).map((car) => car.getName()).join(', ');
    Console.print(`최종 우승자 : ${winners}\n`);
  }
}

export default RacingGame;