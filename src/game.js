import { Console } from '@woowacourse/mission-utils';
import Car from './car.js';

class Game {
  constructor(carNames) {
    this.carNames = carNames;
  }

  race(times) {
    for (let i = 0; i < times; i++) {
      this.cars.forEach((car) => car.move());
      this.printStatus();
    }
  }
}
