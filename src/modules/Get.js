import Is from './Is.js';

class Get {
  static carPositionMatrix(numberOfCar, numberOfGame) {
    return new Array(numberOfCar)
      .fill(numberOfGame)
      .map(Get.randomPositionList);
  }

  static randomPositionList(numberOfGame) {
    return new Array(numberOfGame).fill(0).map((position, index, callArray) => {
      if (index === 0) return (callArray[0] = Is.running() ? 1 : 0);
      return (callArray[index] = callArray[index - 1] + (Is.running() ? 1 : 0));
    });
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
    return racingInfo.carPositionMatrix.map(
      carPosition => carPosition[carPosition.length - 1]
    );
  }
}

export default Get;
