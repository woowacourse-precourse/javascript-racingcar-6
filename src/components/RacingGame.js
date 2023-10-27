import { Console } from '@woowacourse/mission-utils';
import { GET_INPUT_MESSAGE, OUTPUT_MESSAGE } from '../utils/constants.js';
import GameCalculator from './GameCalculator.js';
import UserInputValidator from './UserInputValidator.js';

class RacingGame {
  constructor() {
    this.userInputCars = null;
    this.userInputTryCount = null;
  }

  async start() {
    await this.getUserInput();
  }

  async getUserInput() {
    this.userInputCars = await Console.readLineAsync(GET_INPUT_MESSAGE.carName);

    const USER_INPUT_VALIDATOR = new UserInputValidator(this.userInputCars);
    USER_INPUT_VALIDATOR.validate();

    this.userInputTryCount = await Console.readLineAsync(
      GET_INPUT_MESSAGE.tryCount
    );
    this.showGameResult();
  }

  showGameResult() {
    const GAME_CALCULATOR = new GameCalculator(
      this.userInputCars,
      this.userInputTryCount
    );
    const raceResult = GAME_CALCULATOR.calculate();
    Console.print(OUTPUT_MESSAGE.result);
    Console.print(raceResult[0]);
    Console.print(`${OUTPUT_MESSAGE.winner}${raceResult[1]}`);
  }
}

export default RacingGame;
