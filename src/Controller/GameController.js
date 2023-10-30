import RacingCar from '../Model/RacingCar.js';
import { View } from '../View/View.js';
import { ERROR } from '../constants/Error.js';
import { Validator } from '../utils/Validator.js';

const { NON_EXIST, GAP, NOT_NUMBER, NOT_NATURAL_NUMBER } = ERROR;
const { isPresent, isContainSpace, isNumber, isNaturalNumber } = Validator;

export default class GameController {
  constructor() {
    this.racingCar = new RacingCar();
  }

  async start() {
    const carNames = await View.readCarNames();
    this.racingCar.getRacingCars(carNames);
    await this.getAttemptNumber();
  }

  async getAttemptNumber() {
    const attemptNumber = await View.readAttempt();
    this.validateAttemptNumber(attemptNumber);
  }

  validateAttemptNumber(value) {
    View.throwError(NON_EXIST, isPresent(value));
    View.throwError(GAP, isContainSpace(value));
    View.throwError(NOT_NUMBER, isNumber(value));
    View.throwError(NOT_NATURAL_NUMBER, isNaturalNumber(value));

    return true;
  }
}
