import { Random } from '@woowacourse/mission-utils';

export default class Car {
  carDistance = '';
  carName = '';

  constructor(carName) {
    this.carName = carName;
  }

  randomlyMove() {
    if (this.canMove()) {
      this.carDistance += '-';
    }
  }

  canMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      return true;
    }
    return false;
  }

  currentDistanceMessage() {
    return `${this.carName} : ${this.carDistance}`;
  }
}
