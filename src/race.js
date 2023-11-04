import { Console } from '@woowacourse/mission-utils';

export class Race {
  constructor(cars, attemptCount) {
    this.cars = cars;
    this.attemptCount = attemptCount;
  }

  start() {
    for (let i = 0; i < this.attemptCount; i++) {
      this.cars.forEach((car) => car.move());
      this.printRaceProgress();
    }
  }

  printRaceProgress() {
    this.cars.forEach((car) => {
      Console.print(`${car.getCarName()} : ${car.getCarStatus()}`);
    });
    Console.print('\n');
  }
}
