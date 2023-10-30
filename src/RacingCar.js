import { Random } from '@woowacourse/mission-utils';

export class RacingCar {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  moveOrStay() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.moveCount += 1;
    }
  }
}
