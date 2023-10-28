import Car from './car';
import { Random } from '@woowacourse/mission-utils';

class RacingGame {
  #racingCars = [];

  constructor(carsNameInput) {
    carsNameInput.split(',').forEach((carName) => {
      this.#racingCars.push(new Car(carName.trim()));
    });
  }

  #moveForwardRandomly() {
    this.#racingCars.forEach((car) => {
      const canGoForward = Random.pickNumberInRange(0, 9) >= 4;

      if (canGoForward) {
        car.moveForward();
      }
    });
  }
}

export default RacingGame;
