import Is from './Is.js';

class Get {
  static runList(numberOfCar, numberOfGame) {
    return new Array(numberOfCar).fill(numberOfGame).map(Get.randomRunList);
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
      result.push(racingInfo.carList[winnerIndex])
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
    const lastPositionList = [];
    racingList.runList.forEach(list => {
      lastPositionList.push(Get.position(list, racingList.numberOfGame));
    });
    return lastPositionList;
  }

  static randomRunList(numberOfGame) {
    return new Array(numberOfGame).fill(null).map(Is.running);
  }
}

export default Get;
