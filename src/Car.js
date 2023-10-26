import { Random } from '@woowacourse/mission-utils';
import { Constant } from './Constant.js';

class Car {
  #name;

  #numOfMoves;

  constructor(carName) {
    this.#name = carName;
    this.#numOfMoves = 0;
  }

  moveForward() {
    const randomNumber = this.#makeRandomNumber();
    if (randomNumber >= Constant.movable) {
      this.#numOfMoves += 1;
    }
    return this.#makeMovingResultString();
  }

  #makeRandomNumber() {
    return Random.pickNumberInRange(Constant.minRandomNum, Constant.maxRandomNum);
  }

  #makeMovingResultString() {
    const movingLog = '-'.repeat(this.#numOfMoves);
    return `${this.#name} : ${movingLog}`;
  }
}

export default Car;
