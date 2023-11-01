//@ts-check

import {
  askNames,
  askTryAmount,
  printResultTitle,
  printResultUsingScoreBoard,
  printWinners,
} from "./core/io.js";
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
    printWinners(this.judgeWinner());
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

  /**
   *
   * @returns { string[] }
   */
  judgeWinner() {
    const maxScore = Math.max(...Object.values(this.scoreBoard.board));

    const winners = [];
    Object.entries(this.scoreBoard.board).forEach(([name, score]) => {
      if (score === maxScore) winners.push(name);
    });

    return winners;
  }
}

export default App;
