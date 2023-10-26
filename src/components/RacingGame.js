import { Console } from '@woowacourse/mission-utils';
import { GET_INPUT_MESSAGE } from '../utils/constans';

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
    this.userInputTryCount = await console.readLineAsync(
      GET_INPUT_MESSAGE.tryCount
    );
  }

  showGameResult() {}
}

export default RacingGame;
