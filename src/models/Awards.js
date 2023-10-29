class Awards {
  #highestScore;

  constructor(winners) {
    this.winners = winners;
  }

  /**
   *
   * @param {[string, number][]} result
   * @returns {string}
   */
  getWinners(result) {
    this.#highestScore = result[0][1];
    this.winners = result
      .filter(score => this.#highestScore === score[1])
      .map(score => score[0])
      .join(', ');

    return this.winners;
  }
}

export default Awards;
