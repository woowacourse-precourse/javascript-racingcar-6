import { MissionUtils } from '@woowacourse/mission-utils';
import CONSTRAINTS from '../constants/Constraints';
import Output from '../views/Output';
import Car from './Car';

export default class Game {
  #cars;

  constructor(cars) {
    this.#cars = cars.map((car) => new Car(car));
  }

  getCars() {
    return this.#cars;
  }

  forward() {
    this.#cars.forEach((car) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      const forward = car.getForward();
      if (randomNumber >= CONSTRAINTS.MIN_FORWARD) {
        car.setForward(forward + 1);
      }
      Output.printExecutionResult(car.getName(), car.getForward());
    });
  }
}
