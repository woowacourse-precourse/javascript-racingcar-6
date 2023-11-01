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
  /** @type { number } */
  tryAmount = 0;

  /** @type { string[] } */
  names = [];

  /** @type { ScoreBoard } */
  scoreBoard;

  async play() {
    this.names = await askNames();
    this.tryAmount = await askTryAmount();
    this.scoreBoard = new ScoreBoard(this.names);

    printResultTitle();
    this.#simulate();
    printWinners(judgeWinner(this.scoreBoard.board));
  }

  #simulate() {
    while (this.tryAmount--) {
      this.simulateOneTurn();
      printResultUsingScoreBoard(this.scoreBoard.board);
    }
  }

  simulateOneTurn() {
    if (!this.names) return;

    this.names.forEach((name) => {
      if (isFowardAllowed()) this.scoreBoard.giveScoreTo(name);
    });
  }
}

export default App;
