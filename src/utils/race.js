import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/constant';

class Race {
  constructor(cars) {
    this.cars = cars;
  }

  advanceCar() {
    this.cars.forEach((car) => car.advanceCar());
  }

  printRaceResult() {
    this.cars.forEach((car) => {
      const dashLine = '-'.repeat(car.move);
      Console.print(`${car.name} : ${dashLine}`);
    });
    Console.print(' ');
  }

  getWinner() {
    const maxAdvanced = Math.max(...this.cars.map((car) => car.move));
    const winners = this.cars
      .filter((car) => car.move === maxAdvanced)
      .map((car) => car.name);
    return winners;
  }

  printWinner() {
    Console.print(`${MESSAGE.GAME.WINNER} ${this.getWinner().join(', ')}`);
  }
}

export default Race;
