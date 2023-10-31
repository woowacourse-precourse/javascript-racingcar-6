import { NormalRacingRule } from "./domain";
import { RacingCarGame } from "./service";

class App {
  #rule = new NormalRacingRule();
  #game = RacingCarGame.createGame(this.#rule);

  async play() {
    await this.#game.promptCarNames();
    await this.#game.promptTotalRounds();
    this.#game.startRacing();
    this.#game.printWinnerNames();
  }
}

export default App;
