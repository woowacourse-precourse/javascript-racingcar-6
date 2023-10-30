import { MissionUtils } from '@woowacourse/mission-utils';
import Cars from './Cars.js';
import Message from './Message.js';
import Interface from './Interface.js';

class RaceRound extends Cars {
  #TOTAL_ROUND;

  constructor(names, totalRound) {
    super();
    this.initializeCarNames(names);
    this.#TOTAL_ROUND = totalRound;
  }

  proceedRound() {
    Interface.printMessage('');
    Interface.printMessage('실행 결과');
    let totalRound = this.getTotalRound;
    const names = this.getAllNames;
    while (totalRound > 0) {
      names.forEach((name) => {
        const randomNum = RaceRound.createRandomNum();
        if (randomNum >= 4) {
          this.movingForwardByName(name);
        }
      });
      Message.roundResults(this.getCarsInfo);
      totalRound -= 1;
    }

    this.announceGameResult();
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

    Message.announceWinners(winners);
    return winners;
  }

  get getTotalRound() {
    return this.#TOTAL_ROUND;
  }

  static createRandomNum() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNum;
  }
}

export default RaceRound;
