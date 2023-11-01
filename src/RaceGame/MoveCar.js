import { Random } from '@woowacourse/mission-utils';
import { SYMBOL, MAGIC_NUMBER } from '../constants/Constants';

class MoveCar {
  constructor(forward) {
    this.forward = forward;
  }

  moveCar = (car) => {
    if (!this.forward.has(car)) {
      this.forward.set(car, SYMBOL.hyphen);
      return;
    }

    this.forward.set(car, this.forward.get(car) + SYMBOL.hyphen);
  };

  stopCar = (car) => {
    if (this.forward.get(car) === undefined) {
      this.forward.set(car, SYMBOL.empty);
    }
  };

  race = (car) => {
    const randomNumber = Random.pickNumberInRange(MAGIC_NUMBER.randomStart, MAGIC_NUMBER.randomEnd);

    if (randomNumber < MAGIC_NUMBER.moveNumber) this.stopCar(car);
    if (randomNumber >= MAGIC_NUMBER.moveNumber) this.moveCar(car);
  };
}

export default MoveCar;
