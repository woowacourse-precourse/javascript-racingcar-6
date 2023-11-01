import Game from '../Model/Game.js';
import Car from '../Model/Car.js';

import View from '../View/View.js';

import Validator from '../utils/Validator.js';

import CHARACTER from '../constants/Character.js';

class GameController {
  #validate = Validator;

  #view = new View();

  #game;

  async start() {
    const racingCars = await this.#getRacingCars();
    const attemptNumber = await this.#getAttemptNumber();

    this.#game = new Game({ racingCars, attemptNumber });
    const { result, winner } = this.#game.startRace();

    this.#view.printResult(result);
    this.#view.printWinner(winner);
  }

  async #getRacingCars() {
    const carNames = await this.#view.readCarNames();
    this.#validate.validateRacingCars(carNames);

    return carNames.split(CHARACTER.COMMA).map((car) => new Car(car));
  }

  async #getAttemptNumber() {
    const inputValue = await this.#view.readAttempt();
    this.#validate.validateAttemptNumber(inputValue);

    return inputValue;
  }
}

export default GameController;
