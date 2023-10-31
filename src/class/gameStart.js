import { Random, Console } from '@woowacourse/mission-utils';
import { PLAY_GAME, ERROR_MESSAGE, VALID_LENGTH } from '../Constants.js'

class InputCarMoveCount {
  constructor() {
    this.cars = [];
  }

  async userInput() {
    try {
      Console.print(PLAY_GAME.INPUT);
      const inputCarName = await Console.readLineAsync('');
      const carNames = inputCarName.split(',').map(name => name.trim());

      if (carNames.some(name => name.length > VALID_LENGTH.NAME_MAX_LENGTH)) {
        throw new Error(ERROR_MESSAGE);
      }
      this.cars = carNames;
    } catch (error) {
      Console.print(ERROR_MESSAGE);
    }
  }

  async countInput() {
    try {
      Console.print(PLAY_GAME.TRY_COUNT);
      const inputCount = await Console.readLineAsync('');
      const tryCount = parseInt(inputCount);

      if (isNaN(tryCount) || tryCount <= 0) {
        throw new Error(ERROR_MESSAGE);
      }
      return tryCount;
    } catch (error) {
      Console.print(ERROR_MESSAGE);
      throw error;
    }
  }
}

export default InputCarMoveCount;