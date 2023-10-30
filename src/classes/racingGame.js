import LIMIT from '../constant/limit';
import Car from './car';
import { Random } from '@woowacourse/mission-utils';

class RacingGame {
  #racingCars = [];

  constructor(carsNameInput) {
    carsNameInput.split(',').forEach((carName) => {
      this.#racingCars.push(new Car(carName.trim()));
    });
  }

  * play(tryTime) {
    for (let i = 0; i < tryTime; i += 1) {
      this.#moveForwardRandomly();
      yield this.#racingCars;
    }
  }

  #moveForwardRandomly() {
    this.#racingCars.forEach((car) => {
      if (Random.pickNumberInRange(0, 9) >= LIMIT.FORWARD_THRESHOLD) {
        car.moveForward();
      }
    });
  }
}

export default RacingGame;
