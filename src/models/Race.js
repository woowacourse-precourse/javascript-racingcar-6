import Car from './Car.js';
import { Console } from '@woowacourse/mission-utils';

class Race {
  constructor(carNames, attempts) {
    this.cars = carNames.map((name) => new Car(name));
    this.attempts = attempts;
  }

  startRace() {
    let currentAttempts = 0;
    while (currentAttempts < this.attempts) {
      this.moveCars();
      this.printRaceStatus();
      Console.print('\n');
      currentAttempts += 1;
    }
  }

  moveCars() {
    for (const car of this.cars) {
      car.move();
    }
  }

  printRaceStatus() {
    for (const car of this.cars) {
      const name = car.name;
      const currentPosition = car.getPosition();
      const dash = '-'.repeat(currentPosition);

      Console.print(`${name} : ${dash}`);
    }
  }

  findWinner() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    return this.cars.filter((car) => car.getPosition() === maxPosition).map((winner) => winner.name);
  }
}

export default Race;
