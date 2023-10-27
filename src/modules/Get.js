import { run } from 'jest';
import Is from './Is.js';

class Get {
  static didItRun(numberOfGame, numberOfCar) {
    return new Array(numberOfCar)
      .fill(null)
      .map(() => new Array(numberOfGame).fill(Is.running()));
  }

  static position(runList, count) {
    return runList.reduce((previous, running, index) => {
      if (index <= count && running) return previous + 1;
      else return previous;
    }, 0);
  }

  static winnerNameList(racingInfo) {
    const winnerIndexList = Get.winnerIndexList(racingInfo);
    const result = [];
    winnerIndexList.forEach(winnerIndex =>
      result.push(result.carList[winnerIndex])
    );
    return result;
  }

  static winnerIndexList(racingList) {
    const lastPositionList = Get.lastPositionList(racingList);
    const maxPostion = Math.max(...lastPositionList);
    const result = [];
    lastPositionList.forEach((position, index) => {
      if (position === maxPostion) result.push(index);
    });
    return result;
  }

  static lastPositionList(racingList) {
    const lastPosition = [];
    racingList.didItRun.forEach(runList => {
      lastPosition.push(Get.position(runList, racingList.gameOfNumber - 1));
    });
    return lastPosition;
  }
}

export default Get;
