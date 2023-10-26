import { Random } from '@woowacourse/mission-utils';
import { Constant } from './Constant.js';

class Car {
  #name;

  #numOfMoves;

  constructor(carName) {
    this.#name = carName;
    this.#numOfMoves = 0;
  }

  #makeRandomNumber() {
    return Random.pickNumberInRange(Constant.minRandomNum, Constant.maxRandomNum);
  }

  #moveForward() {
    const randomNumber = this.#makeRandomNumber();
    if (randomNumber >= Constant.movable) {
      this.#numOfMoves += 1;
    }
  }
}

export default Car;
