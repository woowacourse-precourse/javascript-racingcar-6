import { MissionUtils } from '@woowacourse/mission-utils';
import Message from './Message.js';

const MIN_MOVING_FORWARD_NUM = 4;

class RaceRound {
  #TOTAL_ROUND;

  constructor(cars, totalRound) {
    this.cars = cars;
    this.#TOTAL_ROUND = totalRound;
  }

  static createRandomNum() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNum;
  }

  proceedRound() {
    let totalRound = this.#TOTAL_ROUND;
    while (totalRound > 0) {
      this.namedCarsDecideGoStop(this.cars.names);
      Message.roundResults(this.cars.ascendingSortedInfo);
      totalRound -= 1;
    }
  }

  namedCarsDecideGoStop(names) {
    names.forEach((name) => {
      const randomNum = RaceRound.createRandomNum();
      if (randomNum >= MIN_MOVING_FORWARD_NUM) {
        this.cars.movingForwardSpecificName(name);
      }
    });
  }

  announceGameResult() {
    const winners = this.makeOutWinners();
    Message.announceWinners(winners);
  }

  makeOutWinners() {
    const carsInfo = this.cars.ascendingSortedInfo;

    const [winners, max] = [[], carsInfo[0][1].distance.length];
    carsInfo.forEach(([name, { distance }]) => {
      if (distance.length === max) winners.push(name);
    });
    return winners;
  }
}

export default RaceRound;
