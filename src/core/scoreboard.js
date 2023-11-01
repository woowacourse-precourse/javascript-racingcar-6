// @ts-check

class ScoreBoard {
  /** @type {Record<string, number>} */
  board;

  /**
   *
   * @param {string[]} names
   */
  constructor(names) {
    this.board = this.makeScoreboardByNames(names);
  }

  /**
   * @param {string[]} names
   * @returns {Record<string, number>}
   */
  makeScoreboardByNames(names) {
    /** @type { Record<string, number> } */
    let res = {};

    for (const name of names) {
      if (name.trim() === "") continue;
      res[name] = 0;
    }

    return res;
  }

  /**
   *
   * @param {string} name
   */
  giveScoreTo(name) {
    if (!this.board) return;
    if (!this.board.hasOwnProperty(name)) return;

    this.board[name] += 1;
  }
}

export default ScoreBoard;
