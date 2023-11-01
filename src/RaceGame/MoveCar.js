import { Random } from '@woowacourse/mission-utils';
import { SYMBOL, MAGIC_NUMBER } from '../Constants/Constants.js';

class MoveCar {
  constructor(forwardStatus) {
    this.forwardStatus = forwardStatus;
  }

  moveCar = (car) => {
    if (!this.forwardStatus.has(car)) {
      this.forwardStatus.set(car, SYMBOL.hyphen);
      return;
    }

    this.forwardStatus.set(car, this.forwardStatus.get(car) + SYMBOL.hyphen);
  };

  stopCar = (car) => {
    if (this.forwardStatus.get(car) === undefined) {
      this.forwardStatus.set(car, SYMBOL.empty);
    }
  };

  race = (car) => {
    const randomNumber = Random.pickNumberInRange(MAGIC_NUMBER.randomStart, MAGIC_NUMBER.randomEnd);

    if (randomNumber < MAGIC_NUMBER.moveNumber) this.stopCar(car);
    if (randomNumber >= MAGIC_NUMBER.moveNumber) this.moveCar(car);
  };
}

export default MoveCar;
