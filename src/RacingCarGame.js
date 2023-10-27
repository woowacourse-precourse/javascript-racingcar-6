import { MissionUtils } from '@woowacourse/mission-utils';
// import { GAME, ERROR } from './constants.js';

class RacingCarGame {
  constructor(name) {
    this.name = name;
    this.advance = 0;
  }

  makeRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  advanceIfOverFour() {
    if (this.makeRandomNumber() >= 4) this.advance += 1;
  }
}
