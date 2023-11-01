import InputHandler from "./InputHandler.js";
import Car from "./Car.js";
import RacingGame from "./RacingGame.js";
import OutputHandler from "./OutputHandler.js";

class App {
  #carNameArray;
  #roundCount;

  async play() {
    await this.#getUserInput();

    const game = new RacingGame(
      this.#carNameArray.map((name) => new Car(name)),
      this.#roundCount
    );
    game.play();

    const allRoundResult = game.resultArray;
    OutputHandler.printGameExecution(allRoundResult);

    const winnerArray = game.getWinnerNameArray();
    OutputHandler.printWinner(winnerArray);
  }

  async #getUserInput() {
    this.#carNameArray = await InputHandler.getCarNameArray();
    this.#roundCount = await InputHandler.getRoundCount();
  }
}

export default App;
