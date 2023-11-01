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

    const { result, winner } = this.#playGame(racingCars, attemptNumber);

    this.#showResults(result, winner);
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

  #playGame(racingCars, attemptNumber) {
    this.#game = new Game({ racingCars, attemptNumber });
    const { result, winner } = this.#game.race();

    return { result, winner };
  }

  #showResults(result, winner) {
    this.#view.printResult(result);
    this.#view.printWinner(winner);
  }
}

export default GameController;
