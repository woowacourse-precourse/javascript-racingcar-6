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
}

export default Car;
