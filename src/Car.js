import { Random } from '@woowacourse/mission-utils';
import { CONSTANT } from './Constant.js';

class Car {
  #name;

  #numOfMoves;

  constructor(carName) {
    this.#name = carName;
    this.#numOfMoves = 0;
  }

  moveForward() {
    const randomNumber = this.#makeRandomNumber();
    if (randomNumber >= CONSTANT.movable) {
      this.#numOfMoves += 1;
    }
    return this.#makeMovingResultString();
  }

  #makeRandomNumber() {
    return Random.pickNumberInRange(CONSTANT.minRandomNum, CONSTANT.maxRandomNum);
  }

  #makeMovingResultString() {
    const movingLog = '-'.repeat(this.#numOfMoves);
    return `${this.#name} : ${movingLog}`;
  }

  compareToMax(anotherCar) {
    return this.#numOfMoves - anotherCar.#numOfMoves;
  }

  compareIsSame(anotherCar) {
    return this.#numOfMoves === anotherCar.#numOfMoves;
  }

  getCarName() {
    return this.#name;
  }
}

export default Car;
