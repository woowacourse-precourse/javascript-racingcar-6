import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../constants/messages.js';
import InputValidator from '../models/InputValidator.js';

class InputView {
  static async getCarNames() {
    const input = await Console.readLineAsync(GUIDE_MESSAGES.carNames);
    const carNames = input.split(',').map(el => el.trim());

    InputValidator.carNames(carNames);

    return carNames;
  }

  static async getLaps() {
    const laps = await Console.readLineAsync(GUIDE_MESSAGES.laps);

    InputValidator.laps(parseInt(laps, 10));

    return parseInt(laps, 10);
  }
}

export default InputView;
