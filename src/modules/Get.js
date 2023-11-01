import Is from './Is.js';

class Get {
  /**
   * Returns an array with length numberOfCar
   * Each element contains an Array containing the location information of the car according to numberOfGame number of games.
   * @param {Number} numberOfCar
   * @param {Number} numberOfGame
   * @returns {Array.<Array.<Number>>}
   */
  static carPositionMatrix(numberOfCar, numberOfGame) {
    return new Array(numberOfCar)
      .fill(numberOfGame)
      .map(Get.randomPositionList);
  }

  /**
   * Returns Array containing random numberOfGame distance information.
   * The value is determined according to the probability of return from Is.running()
   * @param {Number} numberOfGame
   * @returns {Array.<Number>}
   */
  static randomPositionList(numberOfGame) {
    return new Array(numberOfGame).fill(0).map((position, index, callArray) => {
      if (index === 0) return (callArray[0] = Is.running() ? 1 : 0);
      return (callArray[index] = callArray[index - 1] + (Is.running() ? 1 : 0));
    });
  }

  /**
   * This function receives the racingInfo Object returned from ConvertInputTo.racingInfo() as an argument,
   * and finally returns an Array containing the names of the winners.
   * @param {Object} racingInfo from ConvertInputTo.racingInfo()
   * @returns {Array.<String>} containing winner name
   */
  static winnerNameList(racingInfo) {
    const winnerIndexList = Get.winnerIndexList(racingInfo);
    const result = [];
    winnerIndexList.forEach(winnerIndex =>
      result.push(racingInfo.carList[winnerIndex])
    );
    return result;
  }

  /**
   * This function receives the racingInfo Object returned from ConvertInputTo.racingInfo() as an argument,
   * and returns an Array containing the index in the racingInfo.carList furthest from the end.
   * @param {Object} racingInfo from ConvertInputTo.racingInfo()
   * @returns {Array.<Number>} containing winner index
   */
  static winnerIndexList(racingInfo) {
    const lastPositionList = Get.lastPositionList(racingInfo);
    const maxPostion = Math.max(...lastPositionList);
    const result = [];
    lastPositionList.forEach((position, index) => {
      if (position === maxPostion) result.push(index);
    });
    return result;
  }

  /**
   * This function receives the racingInfo Object returned from ConvertInputTo.racingInfo() as an argument,
   * and an Array containing the location information of cars after the last game.
   * @param {Object} racingInfo from ConvertInputTo.racingInfo()
   * @returns {Array.<Number>} containing last postion
   */
  static lastPositionList(racingInfo) {
    return racingInfo.carPositionMatrix.map(
      carPosition => carPosition[carPosition.length - 1]
    );
  }
}

export default Get;
