const FinalWinnerSelector = {
  /**
   * @param {Map} data
   * @returns {string[]}
   */
  evaluate(data) {
    const winners = [];
    const winnerScore = this.getWinnerScore(data);

    data.forEach((progress, name) => {
      if (winnerScore !== progress.length) return;
      winners.push(name);
    });

    return winners;
  },

  /**
   * @param {Map} data
   * @returns {number}
   */
  getWinnerScore(data) {
    let winnerScore = 0;

    data.forEach((progress) => {
      winnerScore = Math.max(winnerScore, progress.length);
    });

    return winnerScore;
  },
};

export default FinalWinnerSelector;
