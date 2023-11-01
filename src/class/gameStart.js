import { Console } from '@woowacourse/mission-utils';
import { PLAY_GAME, ERROR_MESSAGE, VALID_LENGTH, CONDITION_POINT } from '../Constants.js'
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
        throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH_ERROR);
      }
      if (carNames.length === VALID_LENGTH.CAR_MIN_LENGTH || carNames.length > VALID_LENGTH.CAR_MAX_LENGTH) {
        throw new Error(ERROR_MESSAGE.CAR_COUNT_ERROR);
      }
      if (carNames.some(name => name.length === VALID_LENGTH.CAR_NAME_EMPTY)) {
        throw new Error(ERROR_MESSAGE.CAR_EMPTY_ERROR);
      }
      const checkDuplicateCarNames = new Set(carNames);
      if (checkDuplicateCarNames.size !== carNames.length) {
        throw new Error(ERROR_MESSAGE.CAR_DUPLICATE_ERROR);
      }

      Console.print(PLAY_GAME.TRY_COUNT);
      const inputCount = await Console.readLineAsync('');
      const tryCount = parseInt(inputCount);

      if (isNaN(tryCount) || tryCount <= CONDITION_POINT.NOT_TRY_COUNT) {
        throw new Error(ERROR_MESSAGE.TRY_COUNT_ERROR);
      }

      this.cars = carNames;
      this.tryCount = tryCount;

    } catch (error) {
      throw error;
    }
  }
}

export default InputCarMoveCount;