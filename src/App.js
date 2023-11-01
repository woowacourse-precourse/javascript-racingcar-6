import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

import Refree from './Refree.js';
import Validation from './util/Validation.js';
import { CAR_NAME } from './constants/racingGame.js';

class App {
  #refree;
  #totalRounds;

  constructor() {
    this.#refree = new Refree();
  }

  async play() {
    await this.#setUpRaceGame();
    this.#playRaceGame();
    this.#findWinner();
  }

  async #setUpRaceGame() {
    await this.#setUpCars();
    await this.#setUpTotalRounds();
  }

  async #setUpCars() {
    const carNameString = await InputView.getCarNames();
    const carNames = carNameString.split(CAR_NAME.SEPARATOR);
    Validation.validateCarNames(carNames);

    this.#refree.registerCars(carNames);
  }

  async #setUpTotalRounds() {
    const totalRoundsString = await InputView.getTotalRounds();
    Validation.validateTotalRounds(totalRoundsString);

    this.#totalRounds = Number(totalRoundsString);
  }

  #playRaceGame() {
    OutputView.printResultTitleMessage();

    Array.from({ length: this.#totalRounds }).forEach(() => {
      this.#refree.moveCars();
      OutputView.printResultPerRound(this.#refree.getRecordResultList());
    });
  }

  #findWinner() {
    const winner = this.#refree.getWinner();
    OutputView.printWinner(winner);
  }
}

export default App;
