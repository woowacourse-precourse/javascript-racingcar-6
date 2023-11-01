class Awards {
  #highestScore = 0;

  constructor(winners) {
    this.winners = winners;
  }

  /**
   * 최대 점수와 도출해낸 점수 통해 우승자를 도출해낸다.
   * @param {[string, number][]} scoreBoard
   * @returns {string}
   */
  getWinners(scoreBoard) {
    this.#getHighestScore(scoreBoard);
    this.#setWinners(scoreBoard);

    return this.winners;
  }

  /**
   * 스코어보드의 가장 높은 점수를 도출해낸다.
   * @param {[string, number][]} scoreBoard
   */
  #getHighestScore(scoreBoard) {
    const [[, winnerScore]] = scoreBoard;
    this.#highestScore = winnerScore;
  }

  /**
   * 가장 높은 전진 포인트를 가진 우승자(들)을 도출해낸다.
   * @param {[string, number][]} scoreBoard
   */
  #setWinners(scoreBoard) {
    this.winners = scoreBoard
      .filter(([, score]) => this.#highestScore === score)
      .map(([name]) => name)
      .join(', ');
  }
}

export default Awards;
