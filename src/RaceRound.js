import { MissionUtils } from '@woowacourse/mission-utils';
import Cars from './Cars.js';

class RaceRound extends Cars {
  constructor(names) {
    super();
    this.initializeCarNames(names);
  }

  proceedRound() {
    let totalRound = this.getTotalRound;
    const names = this.getAllNames;
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

  get getTotalRound() {
    return this.getAllNames.length;
  }

  announceGameResult() {
    let maxDistance = Number.MIN_SAFE_INTEGER;
    let winners = [];
    const carsInfo = this.getAllCarsInfo;

    carsInfo.forEach(([name, { distance }]) => {
      const distanceRange = distance.length;
      if (distanceRange >= maxDistance) {
        winners = distanceRange === maxDistance
          ? [...winners, name]
          : [name];
        maxDistance = Math.max(distanceRange, maxDistance);
      }
    });

    return winners;
  }

  static createRandomNum() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNum;
  }
}

export default RaceRound;