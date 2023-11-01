import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car';
import Constraints from '../constants/Constraints';
import Output from '../views/Output';

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
      if (randomNumber >= Constraints.MIN_FORWARD) {
        car.setForward(forward + 1);
      }
      Output.printExecutionResult(car.getName(), car.getForward());
    });
  }
}
