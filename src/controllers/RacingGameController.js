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
    const { carNames, rounds } = await this.#getUserInputs();
    this.#setupCarsFromNames(carNames);
    this.#executeRacingRounds(rounds);
    this.#racingGame.concludeGame();
    this.#displayResult();
  }

  async #getUserInputs() {
    const carNames = await inputView.readNamesInput();
    const rounds = await inputView.readRoundsNumberInput();
    return { carNames, rounds };
  }

  #setupCarsFromNames(names) {
    const cars = names.map((item) => this.#factory.createCar(item));
    this.#racingGame.setCars(cars);
  }

  #executeRacingRounds(roundsNumber) {
    outputView.printResultHeader();
    for (let i = 0; i < roundsNumber; i += 1) {
      this.#racingGame.moveAllCars();
      const roundResult = this.#racingGame.getAllCarsMovementResult();
      outputView.printResult(roundResult);
    }
  }
  #displayResult() {
    const winners = this.#racingGame.getWinners();
    outputView.printWinners(winners);
  }
}

export default RacingGameController;
