import { Random } from '@woowacourse/mission-utils';

export default class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }

  getName() {
    return this.name;
  }

  oneStepForward() {
    this.move += 1;
  }

  getMove() {
    return this.move;
  }

  tryToMove() {
    const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);

    if (RANDOM_NUMBER >= 4) {
      this.oneStepForward();
    }
  }
}
