import { MissionUtils } from '@woowacourse/mission-utils';
import Cars from './Cars';

class RaceRound extends Cars {
  constructor(names) {
    super();
    this.initializeCarNames(names);
  }

  proceedRound() {
    let totalRound = this.getTotalRound();
    const names = super.getNames;
    while (totalRound > 0) {
      names.forEach((name) => {
        const randomNum = RaceRound.createRandomNum();
        if (randomNum >= 4) {
          this.movingForwardByName(name);
        }
      });
      totalRound -= 1;
    }
  }

  getTotalRound() {
    return this.getNames.length;
  }

  static createRandomNum() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNum;
  }
}

export default RaceRound;
