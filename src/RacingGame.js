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

  clearRound() {
    this.tryRound -= 1;
  }

  isMovalbe(number) {
    return number >= 4;
  }
}
