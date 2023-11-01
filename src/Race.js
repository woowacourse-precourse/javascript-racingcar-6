import Car from './Car.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Race {
  constructor(cars) {
    this.cars = cars.map((name) => new Car(name));
  }

  playTurn() {
    this.cars.forEach((car) => car.move());
  }

  getWinners() {
    const maxDistance = Math.max(...this.cars.map((car) => car.distance));
    return this.cars
      .filter((car) => car.distance === maxDistance)
      .map((car) => car.name);
  }

  printStatus() {
    this.cars.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${car.getDistance()}`);
    });
    MissionUtils.Console.print('\n');
  }
}

export default Race;
