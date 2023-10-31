import { VALIDATION } from '../constants/constants';
import { Random } from '@woowacourse/mission-utils';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  moveForward() {
    if (this.canMoveForward()) {
      this.#position += 1;
    }
  }

  canMoveForward = () => {
    const randomNumber = Random.pickNumberInRange(
      VALIDATION.carMoveCondition.minNumber,
      VALIDATION.carMoveCondition.maxNumber,
    );
    return randomNumber >= VALIDATION.carMoveCondition.triggerNumber;
  };
}

export default Car;
