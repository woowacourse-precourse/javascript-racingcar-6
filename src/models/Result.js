class Result {
  /**
   *
   * @param {총 자동차의 갯수} carCount
   * @returns
   */
  static setGameBoard(carCount) {
    return Array(carCount).fill(0);
  }
}

export default Result;
