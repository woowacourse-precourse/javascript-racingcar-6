import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, ERROR_MESSAGE, CONDITION } from './constants.js';

class App {
  async play() {
    const carNames = await Console.readLineAsync(INPUT_MESSAGE.CAR_NAME);
    const carNameArray = carNames.split(',');
    App.#validateNameLength(carNameArray);

    const tryCount = await Console.readLineAsync(INPUT_MESSAGE.TRY_COUNT);
    App.#validateTryCount(tryCount);
  }

  static #validateNameLength(carNameArray) {
    carNameArray.forEach((carName) => {
      if (CONDITION.NAME_LENGTH(carName)) {
        throw new Error(ERROR_MESSAGE.NAME_LENGTH);
      }
    });
  }

  static #validateTryCount(count) {
    if (CONDITION.TRY_COUNT(Number(count))) {
      throw new Error(ERROR_MESSAGE.TRY_COUNT);
    }
  }
}

export default App;
