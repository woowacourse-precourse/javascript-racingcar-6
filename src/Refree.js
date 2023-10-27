import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class Refree {
  #carList = new Map();

  registerCars(carNames) {
    carNames.split(',').forEach((car) => {
      this.#carList.set(car, new Car(car));
    });
  }

  moveCars() {
    this.#carList.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) car.move(1);
    });
  }
}

export default Refree;
