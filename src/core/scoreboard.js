// @ts-check

import { makeZeroValuedObjectFromKeys } from "../utils/parse.js";

class ScoreBoard {
  /** @type {Record<string, number>} */
  board;

  /** @type {string[]} */
  names;

  /**
   *
   * @param {string[]} names
   */
  constructor(names) {
    this.names = names;
    this.board = this.makeScoreBoardByNames(names);
  }

  /**
   * @param {string[]} names
   * @returns {Record<string, number>}
   */
  makeScoreBoardByNames(names) {
    const filteredNames = names.filter((name) => name.trim() !== "");
    return makeZeroValuedObjectFromKeys(filteredNames);
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
