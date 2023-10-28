import Is from './Is.js';

class Get {
  static runListArray(numberOfCar, numberOfGame) {
    return new Array(numberOfCar).fill(numberOfGame).map(Get.randomRunList);
  }

  static randomRunList(numberOfGame) {
    return new Array(numberOfGame).fill(null).map(Is.running);
  }

  static positionWhen(runList, count) {
    return runList.reduce((previous, running, index) => {
      if (index <= count && running) return previous + 1;
      else return previous;
    }, 0);
  }

  static winnerNameList(racingInfo) {
    const winnerIndexList = Get.winnerIndexList(racingInfo);
    const result = [];
    winnerIndexList.forEach(winnerIndex =>
      result.push(racingInfo.carList[winnerIndex])
    );
    return result;
  }

  static winnerIndexList(racingInfo) {
    const lastPositionList = Get.lastPositionList(racingInfo);
    const maxPostion = Math.max(...lastPositionList);
    const result = [];
    lastPositionList.forEach((position, index) => {
      if (position === maxPostion) result.push(index);
    });
    return result;
  }

  static lastPositionList(racingInfo) {
    const lastPositionList = [];
    racingInfo.runListArray.forEach(list => {
      lastPositionList.push(Get.positionWhen(list, racingInfo.numberOfGame));
    });
    return lastPositionList;
  }
}

export default Get;
