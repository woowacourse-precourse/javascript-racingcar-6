import { Random } from '@woowacourse/mission-utils';
import Console from '../Console.js';
import RacingCar from './RacingCar.js';

class Race {
  cars = [];
  attemptCount = 0;

  #START_INCLUSIVE = 0;
  #END_INCLUSIVE = 9;
  #BASE_NUMBER = 4;

  async prepare() {
    const carNames = await Console.askCarNames();
    carNames.forEach((name) => {
      this.cars.push(new RacingCar(name));
    });
    this.attemptCount = await Console.askAttemptCount();
  }

  race() {
    while (this.attemptCount > 0) {
      this.cars.forEach((car) => this.tryToMoveForward(car));
      this.attemptCount -= 1;
    }
    console.log(this.cars);
  }

  tryToMoveForward(car) {
    const randomNumber = Random.pickNumberInRange(
      this.#START_INCLUSIVE,
      this.#END_INCLUSIVE,
    );
    if (this.#BASE_NUMBER <= randomNumber) car.moveForward();
  }
}

export default Race;
