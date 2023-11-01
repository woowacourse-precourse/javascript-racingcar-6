//@ts-check

import {
  askNames,
  askTryAmount,
  printResultTitle,
  printResultUsingScoreBoard,
  printWinners,
} from "./core/io.js";
import { judgeWinner } from "./core/judge.js";
import ScoreBoard from "./core/scoreboard.js";
import { isFowardAllowed } from "./utils/prob.js";

class App {
  /** @type { ScoreBoard } */
  scoreBoard;

  async play() {
    const names = await askNames();
    const tryAmount = await askTryAmount();

    this.scoreBoard = new ScoreBoard(names);

    printResultTitle();
    this.#simulate(tryAmount);
    printWinners(judgeWinner(this.scoreBoard.board));
  }

  /**
   *
   * @param {number} tryAmount
   */
  #simulate(tryAmount) {
    while (tryAmount--) {
      this.simulateOneTurn();
      printResultUsingScoreBoard(this.scoreBoard.board);
    }
  }

  simulateOneTurn() {
    this.scoreBoard.names
      .filter(() => isFowardAllowed())
      .forEach((name) => this.scoreBoard.giveScoreTo(name));
  }
}

export default App;
