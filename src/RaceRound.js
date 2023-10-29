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
          super.movingForwardByName(name);
          this.movingForwardByName(name);
        }
      });
      totalRound -= 1;
    }
  }

  movingCarsSpecificName(name) {
    console.log(name);
    super.movingForwardByName(name);
  }

  getTotalRound() {
    return super.getNames.length;
  }

  static createRandomNum() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNum;
  }
}

export default RaceRound;
