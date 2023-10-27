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
    this.#setupCarsFromNames(carNames);
    const rounds = await inputView.readRoundsNumberInput();
    outputView.printResultHeader();
    this.#executeRacingRounds(rounds);
    this.#racingGame.concludeGame();
    const winners = this.#racingGame.getWinners();
    outputView.printWinners(winners);
  }

  #setupCarsFromNames(names) {
    const cars = names.map((item) => this.#factory.createCar(item));
    this.#racingGame.setCars(cars);
  }

  #executeRacingRounds(roundsNumber) {
    for (let i = 0; i < roundsNumber; i += 1) {
      this.#racingGame.moveAllCars();
      const roundResult = this.#racingGame.getAllCarsMovementResult();
      outputView.printResult(roundResult);
    }
  }
}

export default RacingGameController;
