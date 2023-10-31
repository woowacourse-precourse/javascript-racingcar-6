import { Console } from '@woowacourse/mission-utils';
import validateCarNames from '../validators/validateCarNames.js';
import validateTryCount from '../validators/validateTryCount.js';
import INPUT_QUERY from '../constants/InputQuery.js';

class InputView {
  #reader;

  constructor(reader = Console.readLineAsync) {
    this.#reader = reader;
  }

  async readCarNames() {
    const carNamesInput = await this.#reader(INPUT_QUERY.carNames);
    const carNames = carNamesInput.split(',');
    validateCarNames(carNames);

    return carNames;
  }

  async readTryCount() {
    const tryCountInput = await this.#reader(INPUT_QUERY.tryCount);
    const tryCount = Number(tryCountInput);
    validateTryCount(tryCount);

    return tryCount;
  }
}

export default InputView;
