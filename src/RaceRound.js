import { MissionUtils } from '@woowacourse/mission-utils';
import Message from './Message.js';
import Interface from './Interface.js';
import CarsInfo from './CarsInfo.js';

const MIN_MOVING_FORWARD_NUM = 4;

function printRunResultMessage() {
  Interface.printMessage('');
  Interface.printMessage('실행 결과');
}
class RaceRound {
  #TOTAL_ROUND;

  /**
   * @param {CarsInfo} carsInfo 
   * @param {number} totalRound 
   */
  constructor(carsInfo, totalRound) {
    this.carsInfo = carsInfo;
    this.#TOTAL_ROUND = totalRound;
  }

  static createRandomNum() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNum;
  }

  proceedRound() {
    let totalRound = this.#TOTAL_ROUND;
    printRunResultMessage();
    while (totalRound > 0) {
      this.namedCarsDecideGoStop(this.carsInfo.names);
      Message.roundResults(this.carsInfo.ascendingSortedInfo);
      totalRound -= 1;
    }
  }

  /**
   * @param {string[]} names 
   */
  namedCarsDecideGoStop(names) {
    names.forEach((name) => {
      const randomNum = RaceRound.createRandomNum();
      if (randomNum >= MIN_MOVING_FORWARD_NUM) {
        this.carsInfo.movingForwardSpecificName(name);
      }
    });
  }

  announceGameResult() {
    const winners = this.makeOutWinners();
    Message.announceWinners(winners);
  }

  makeOutWinners() {
    const carsInfo = this.carsInfo.ascendingSortedInfo;

    const [winners, max] = [[], carsInfo[0][1].distance.length];
    carsInfo.forEach(([name, { distance }]) => {
      if (distance.length === max) winners.push(name);
    });
    return winners;
  }
}

export default RaceRound;
