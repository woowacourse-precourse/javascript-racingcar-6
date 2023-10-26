import { Console } from '@woowacourse/mission-utils';
import { GET_INPUT_MESSAGE } from '../utils/constans';

class RacingGame {
  start() {
    this.getUserInput();
  }

  async getUserInput() {
    const USER_INPUT_CARS = await Console.readLineAsync(
      GET_INPUT_MESSAGE.carName
    );
    const USER_INPUT_COUNT = await console.readLineAsync(
      GET_INPUT_MESSAGE.tryCount
    );
  }
}

export default RacingGame;
