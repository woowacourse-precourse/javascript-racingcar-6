import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGE, SYMBOLS } from '../constants/index.js';
import InputValidator from '../models/InputValidator.js';

class InputView {
  static async setCarNames() {
    const userInput = await Console.readLineAsync(GUIDE_MESSAGE.carNames);
    const carNames = userInput.split(SYMBOLS.comma).map((carName) => carName.trim());

    InputValidator.validateCarName(carNames);

    return carNames;
  }

  static async setLaps() {
    const laps = await Console.readLineAsync(GUIDE_MESSAGE.laps);

    InputValidator.validateLaps(parseInt(laps, 10));

    return parseInt(laps, 10);
  }
}

export default InputView;
