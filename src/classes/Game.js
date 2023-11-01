import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car';
import Constraints from '../constants/Constraints';

export default class Game {
  #cars;

  constructor(cars) {
    this.#cars = cars.map((car) => new Car(car));
  }

  forward() {
    this.#cars.forEach((car) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= Constraints.MIN_FORWARD) {
        const forward = car.getForward();
        car.setForward(forward + 1);
      }
    });
  }

  
}
