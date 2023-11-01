import RacingGame from "../Model/RacingGame";
import InputView from "../View/InputView";
import OutputView from "../View/OutputView";
import InputValidate from "../utils/InputValidate";

class GameController {
  #cars;
  #rounds;
  #game;

  setTrynum(input) {
    this.#rounds = +input;
  }
  setParticipant(input) {
    this.#cars = input;
  }

  async readUserInput() {
    await InputView.readUserCars((input) => {
      InputValidate.readCarsValidate(input);
      this.setParticipant(input);
    });
  }

  async readUserTrynum() {
    await InputView.readUserTrynum((input) => {
      InputValidate.readTrynumValidate(input);
      this.setTrynum(input);
    });
  }

  async startgame() {
    await this.readUserInput();
    await this.readUserTrynum();

    OutputView.PrintGameStart();
    let participants = this.#cars.split(",");
    this.#game = new RacingGame(participants, this.#rounds);

    this.#game.start();
  }
}

export default GameController;
