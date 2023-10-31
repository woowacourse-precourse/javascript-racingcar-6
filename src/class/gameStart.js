import { Random, Console } from '@woowacourse/mission-utils';
import { PLAY_GAME, ERROR_MESSAGE } from '../Constants.js'

class InputCarMoveCount {
  constructor() {
    this.cars = [];
  }

  async userInput() {
    Console.print(PLAY_GAME.input);
    const inputCarName = await Console.readLineAsync('');
    const carNames = inputCarName.split(',').map(name => name.trim());

    if (carNames.some(name => name.length > 5)) {
      throw new Error(ERROR_MESSAGE);
    }
    this.cars = carNames;
  }

  async countInput() {
    Console.print(PLAY_GAME.tryCount);
    const inputCount = await Console.readLineAsync('');
    const tryCount = parseInt(inputCount);

    if (isNaN(tryCount) || tryCount <= 0) {
      throw new Error(ERROR_MESSAGE);
    }
    return tryCount;
  }
}

export default InputCarMoveCount;