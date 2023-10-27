import { Random } from '@woowacourse/mission-utils';

export default class Car {
  constructor(carName) {
    this.carName = carName;
  }

  randomlyMove() {
    if (this.canMove()) {
      this.carDistance += '-';
    }
  }
}
