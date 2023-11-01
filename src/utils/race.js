import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/constant.js';

class Race {
  constructor(cars) {
    this.cars = cars;
  }

  advance() {
    this.cars.forEach(car => car.advanceCar());
  }

  printRaceResult() {
    this.cars.forEach(car => {
      const dashLine = '-'.repeat(car.getMove());
      Console.print(`${car.name} : ${dashLine}`);
    });
    Console.print(' ');
  }

  getWinner() {
    const maxAdvanced = Math.max(...this.cars.map(car => car.getMove()));
    const winners = this.cars
      .filter(car => car.getMove() === maxAdvanced)
      .map(car => car.getName());
    return winners;
  }

  printWinner() {
    Console.print(`${MESSAGE.GAME.WINNER} ${this.getWinner().join(', ')}`);
  }
}

export default Race;
