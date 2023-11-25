const Referee = {
  /**
   * @param {Car[]} carArray
   * @returns {Car[]}
   */
  compareMovement(carArray) {
    return carArray.sort((a, b) => b.movement.length - a.movement.length);
  },
  /**
   *
   * @param {string[]} comparedMovement
   * @returns {number}
   */
  getWinnerPoint(comparedMovement) {
    return comparedMovement[0].movement.length;
  },
  /**
   * @param {Car[]} carArray
   * @param {number} winnerPoint
   * @returns {string[]}
   */
  selectWinners(carArray, winnerPoint) {
    const winners = carArray
      .filter((c) => c.movement.length === winnerPoint)
      .map((c) => c.name);

    return winners;
  },
  /**
   * @param {Car[]} carArray
   */
  decideGameResult(carArray) {
    const comparedMovement = this.compareMovement(carArray);
    const winnerPoint = this.getWinnerPoint(comparedMovement);

    return this.selectWinners(carArray, winnerPoint);
  },
};

export default Referee;
