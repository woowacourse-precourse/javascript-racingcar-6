import RacingCar from '../models/RacingCar.js';
import { inputView } from '../views/inputView.js';
import { outputView } from '../views/outputView.js';

class RacingGameController {
  #racingGame;

  constructor(game) {
    this.#racingGame = game;
  }

  async initiate() {
    const carNames = await inputView.readNamesInput();
    this.#handleCarNamesInput(carNames);
    const rounds = await inputView.readRoundsNumberInput();
    outputView.printResultHeader();
    this.#handleRoundsNumberInput(rounds);
    const winners = this.#racingGame.getWinners();
    outputView.printWinners(winners);
  }

  #handleCarNamesInput(names) {
    const cars = names.map((item) => new RacingCar(item));
    this.#racingGame.setCars(cars);
  }

  #handleRoundsNumberInput(roundsNumber) {
    for (let i = 0; i < roundsNumber; i += 1) {
      const roundResult = this.#racingGame.moveAllCars();
      outputView.printResult(roundResult);
    }
    this.#racingGame.setWinners();
  }
}

export default RacingGameController;
