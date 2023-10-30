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
  async play() {
    this.names = await askNames();
    this.tryAmount = await askTryAmount();
    this.scoreboard = makeScoreboardByNames(this.names);

    printResultTitle();
    this.simulateOneTurn();
    printResultUsingScoreBoard(this.scoreboard);
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
}

export default App;
