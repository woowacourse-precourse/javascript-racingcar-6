import RacingCar from '../models/RacingCar.js';
import { inputView } from '../views/inputView.js';
import { outputView } from '../views/outputView.js';

class RacingGameController {
  #racingGame;
  #factory;

  constructor(game, factory) {
    this.#racingGame = game;
    this.#factory = factory;
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
    const cars = names.map((item) => this.#factory.createCar(item));
    this.#racingGame.setCars(cars);
  }

  #handleRoundsNumberInput(roundsNumber) {
    for (let i = 0; i < roundsNumber; i += 1) {
      this.#racingGame.moveAllCars();
      const roundResult = this.#racingGame.getAllCarsMovementResult();
      outputView.printResult(roundResult);
    }
    this.#racingGame.concludeGame();
  }
}

export default RacingGameController;
