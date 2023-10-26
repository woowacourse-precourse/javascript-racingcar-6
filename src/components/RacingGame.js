import { Console } from '@woowacourse/mission-utils';
import { GET_INPUT_MESSAGE } from '../utils/constants.js';
import GameCalculator from './GameCalculator.js';

class RacingGame {
  constructor() {
    this.userInputCars = null;
    this.userInputTryCount = null;
  }

  start() {
    this.getUserInput();
  }

  async getUserInput() {
    this.userInputCars = await Console.readLineAsync(GET_INPUT_MESSAGE.carName);
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

    GAME_CALCULATOR.calculate();
  }
}

export default RacingGame;
