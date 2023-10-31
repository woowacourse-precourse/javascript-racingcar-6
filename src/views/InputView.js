import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGE } from '../constants/index.js';
import CarNameValidator from '../models/CarNameValidator.js';

class InputView {
  static async setCarNames() {
    const userInput = await Console.readLineAsync(GUIDE_MESSAGE.carNames);
    const carNames = userInput.split(',').map((carName) => carName.trim());

    CarNameValidator.validateCarName(carNames);

    return carNames;
  }
}

export default InputView;
