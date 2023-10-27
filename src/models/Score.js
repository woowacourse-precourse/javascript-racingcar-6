class Score {
  constructor() {
    this.scoreBoard = scoreBoard;
  }

  /**
   *
   * @param {string[]} carNames
   * @returns {[key: string]: number}
   */
  static board(carNames) {
    const scoreBoard = {};

    carNames.forEach(el => (scoreBoard[el] = 0));

    return scoreBoard;
  }
}

export default Score;
