import { View } from '../View/View.js';
import Validator from '../utils/Validator.js';

export default class GameController {
  #validate = Validator;

  async start() {
    const racingCars = await this.getRacingCars();
    const attemptNumber = await this.getAttemptNumber();
    console.log(racingCars, attemptNumber);
  }

  async getRacingCars() {
    const carNames = await View.readCarNames();
    this.#validate.validateRacingCars(carNames);

    return carNames.split(',');
  }

  async getAttemptNumber() {
    const inputValue = await View.readAttempt();
    this.#validate.validateAttemptNumber(inputValue);

    return inputValue;
  }
}
