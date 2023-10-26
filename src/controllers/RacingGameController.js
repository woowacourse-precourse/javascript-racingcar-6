import RacingCar from '../models/RacingCar.js';
import {
  validateCarName,
  validateRoundsNumber,
} from '../utils/validateUtils.js';
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

  #handleCarNamesInput(input) {
    const names = input.split(',');
    names.forEach((item) => validateCarName(item));
    const cars = names.map((item) => new RacingCar(item));
    this.#racingGame.setCars(cars);
  }

  #handleRoundsNumberInput(input) {
    const roundsNumber = parseInt(input);
    validateRoundsNumber(roundsNumber);
    for (let i = 0; i < roundsNumber; i += 1) {
      const roundResult = this.#racingGame.moveAllCars();
      outputView.printResult(roundResult);
    }
    this.#racingGame.setWinners();
  }
}

export default RacingGameController;
