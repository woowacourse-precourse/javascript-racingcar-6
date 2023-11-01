import View from "./View.js";
import RacingGame from "./racingGame.js";

class App {
  #racingGame;

  get racingGame() {
    return this.#racingGame;
  }
  set racingGame(racingGame) {
    this.#racingGame = racingGame;
  }

  async readUserInput() {
    const carNameList = await View.Input.inputCarNames();
    const count = await View.Input.inputCount();

    return { carNameList, count };
  }

  async play() {
    const { carNameList, count } = await this.readUserInput();
    this.racingGame = new RacingGame(carNameList, count);
    this.playRacingGame();
    this.showWinner();
  }

  playRacingGame() {
    View.Output.printResultMessage();

    while (!this.racingGame.isGameEnd) {
      this.racingGame.moveAllCars();
      const result = this.racingGame.gameStatus;
      View.Output.printResult(result);
    }
  }

  showWinner() {
    View.Output.printWinner(this.racingGame.winner);
  }
}

export default App;
