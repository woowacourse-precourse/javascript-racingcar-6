import { Random } from '@woowacourse/mission-utils';

export default class RacingGame {
  constructor(carList, tryRound) {
    this.carList = carList;
    this.tryRound = tryRound;
  }

  createRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  isFinish() {
    return this.tryRound === 0;
  }
}
