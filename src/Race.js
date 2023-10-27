import Car from './Car.js';
import { Console } from '@woowacourse/mission-utils';

class Race {
  constructor(carNames, attempts) {
    this.cars = carNames.map((name) => new Car(name));
    this.attempts = attempts;
  }

  startRace() {
    let i = 0;
    while (i < this.attempts) {
      this.moveCar();
      this.printRaceStatus();
      Console.print('\n');
      i++;
    }
  }

  moveCar() {
    for (const car of this.cars) {
      car.move();
    }
  }

  printRaceStatus() {
    for (const car of this.cars) {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    }
  }
}

export default Race;
