import { Random } from '@woowacourse/mission-utils';

export default class Racer {
  constructor(carName) {
    this.carName = carName;
    this.move = 0;
  }

  moveForward() {
    const randomNumber = this.generateRandomNumber();
    if (randomNumber >= 4) {
      this.move += 1;
    }
  }

  generateRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }
}
