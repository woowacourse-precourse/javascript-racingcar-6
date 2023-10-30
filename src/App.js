//@ts-check

import {
  askNames,
  askTryAmount,
  printResultTitle,
  printResultUsingScoreBoard,
} from "./core/io.js";
import { makeScoreboardByNames } from "./utils/parse.js";
import { isFowardAllowed } from "./utils/prob.js";

class App {
  /** @type { number } */
  tryAmount = 0;

  /** @type { string[] } */
  names = [];

  /** @type { Record<string, number> } */
  scoreboard = {};

  async play() {
    this.names = await askNames();
    this.tryAmount = await askTryAmount();
    this.scoreboard = makeScoreboardByNames(this.names);

    printResultTitle();
    this.#loop();
  }

  #loop() {
    while (this.tryAmount--) {
      this.simulateOneTurn();
      printResultUsingScoreBoard(this.scoreboard);
    }
  }

  /**
   *
   * @param {string} name
   */
  giveScoreTo(name) {
    if (!this.scoreboard) return;
    if (!this.scoreboard.hasOwnProperty(name)) return;

    this.scoreboard[name] += 1;
  }

  simulateOneTurn() {
    if (!this.names) return;

    this.names.forEach((name) => {
      if (isFowardAllowed()) this.giveScoreTo(name);
    });
  }

  /**
   *
   * @returns { string[] }
   */
  judgeWinner() {
    const maxScore = Math.max(...Object.values(this.scoreboard));

    const winners = [];
    Object.entries(this.scoreboard).forEach(([name, score]) => {
      if (score === maxScore) winners.push(name);
    });

    return winners;
  }
}

export default App;
