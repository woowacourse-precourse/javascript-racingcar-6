//@ts-check

import { askNames, askTryAmount } from "./core/io";
import { makeScoreboardByNames } from "./utils/parse";

class App {
  async play() {
    this.names = await askNames();
    this.tryAmount = await askTryAmount();
    this.scoreboard = makeScoreboardByNames(this.names);
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
}

export default App;
