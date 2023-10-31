import Game from '../model/Game';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';

class GameController {
  #game;

  async play() {
    await this.#setGame();

    for (let i = 0; i < this.#game.getRound(); i++) {
      this.#game.moveCars();
      this.#showRoundResult();
    }

    this.#showWinners();
  }

  async #setGame() {
    const carNames = await InputView.readCarNames();
    const round = await InputView.readRound();

    this.#game = new Game(carNames, round);
  }

  #showRoundResult() {
    const cars = this.#game.getCars();

    cars.forEach(car => {
      OutputView.printCurrentResult(car.getName(), car.getPosition());
    });
  }

  #showWinners() {
    OutputView.printWinners(this.#game.getWinners());
  }
}

export default GameController;
