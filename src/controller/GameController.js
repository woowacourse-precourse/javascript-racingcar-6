import RacingGame from "../Model/RacingGame";
import InputView from "../View/InputView";
import OutputView from "../View/OutputView";
import InputValidate from "../utils/InputValidate";

class GameController {
  #participants;
  #rounds;
  #game;

  async readUserInput() {
    await InputView.readUserCars((input) => {
      InputValidate.readCarsValidate(input);
      this.#participants = input.split(",");
      this.readUserTrynum();
    });
  }

  async readUserTrynum() {
    await InputView.readUserTrynum((input) => {
      InputValidate.readTrynumValidate(input);
      this.#rounds = +input;
      this.gameready();
    });
  }

  gameready() {
    OutputView.PrintGameStart();
    this.#game = new RacingGame(this.#participants, this.#rounds);
    this.startgame();
  }

  startgame() {
    this.#game.start();
  }
}

export default GameController;
