import { Random } from '@woowacourse/mission-utils';
import { CONSTANT, RANDOM_NUMBER, SYMBOL } from './constants/Constant.js';

class Car {
  #name;

  #moveCount;

  constructor(carName) {
    this.#name = carName;
    this.#moveCount = 0;
  }

  moveForward() {
    const randomNumber = this.#makeRandomNumber();
    if (randomNumber >= CONSTANT.movable) {
      this.#moveCount += 1;
    }
    return this.#makeMovingResultMessage();
  }

  #makeRandomNumber() {
    return Random.pickNumberInRange(RANDOM_NUMBER.minNum, RANDOM_NUMBER.maxNum);
  }

  #makeMovingResultMessage() {
    const movingLog = SYMBOL.movement.repeat(this.#moveCount);
    return `${this.#name} : ${movingLog}`;
  }

  compareWith(anotherCar) {
    return this.#moveCount - anotherCar.#moveCount;
  }

  compareIsSame(anotherCar) {
    return this.#moveCount === anotherCar.#moveCount;
  }

  getCarName() {
    return this.#name;
  }
}

export default Car;
