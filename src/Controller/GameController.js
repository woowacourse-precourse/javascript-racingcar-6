import Game from '../Model/Game.js';
import Car from '../Model/Car.js';

import { View } from '../View/View.js';

import Validator from '../utils/Validator.js';

export default class GameController {
  #validate = Validator;

  #game;

  async start() {
    const racingCars = await this.#getRacingCars();
    const attemptNumber = await this.#getAttemptNumber();

    this.#game = new Game({ racingCars, attemptNumber });
    const result = this.#game.startRace();
    View.printResult(result);
  }

  async #getRacingCars() {
    const carNames = await View.readCarNames();
    this.#validate.validateRacingCars(carNames);

    return carNames.split(',').map((car) => new Car(car));
  }

  async #getAttemptNumber() {
    const inputValue = await View.readAttempt();
    this.#validate.validateAttemptNumber(inputValue);

    return inputValue;
  }
}
