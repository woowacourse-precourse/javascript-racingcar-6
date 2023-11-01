import { Random } from '@woowacourse/mission-utils';
import { SYMBOL, MAGIC_NUMBER } from '../Constants/Constants.js';

class MoveCar {
  constructor(forwardStatus) {
    this.forwardStatus = forwardStatus;
  }

  moveCar = (carName) => {
    if (!this.forwardStatus.has(carName)) {
      this.forwardStatus.set(carName, SYMBOL.hyphen);
      return;
    }

    this.forwardStatus.set(carName, this.forwardStatus.get(carName) + SYMBOL.hyphen);
  };

  stopCar = (carName) => {
    if (this.forwardStatus.get(carName) === undefined) {
      this.forwardStatus.set(carName, SYMBOL.empty);
    }
  };

  race = (carName) => {
    const randomNumber = Random.pickNumberInRange(MAGIC_NUMBER.randomStart, MAGIC_NUMBER.randomEnd);

    if (randomNumber < MAGIC_NUMBER.moveNumber) this.stopCar(carName);
    if (randomNumber >= MAGIC_NUMBER.moveNumber) this.moveCar(carName);
  };
}

export default MoveCar;
