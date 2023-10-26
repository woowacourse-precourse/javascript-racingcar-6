import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../constants/index.js';
import InputValidator from '../models/InputValidator.js';

class InputView {
  static async getCarNames() {
    const input = await Console.readLineAsync(GUIDE_MESSAGES.carNames);
    const carNames = input.split(',').map(el => el.trim());

    InputValidator.validateCarNames(carNames);

    return carNames;
  }
}

export default InputView;
