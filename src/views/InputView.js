import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../constants/messages.js';
import InputValidator from '../models/InputValidator.js';
import SYMBOLS from '../constants/symbols.js';

class InputView {
  static async getCarNames() {
    const { comma } = SYMBOLS;
    const carNames = (await Console.readLineAsync(GUIDE_MESSAGES.carNames))
      .split(comma)
      .map(carName => carName.trim());

    InputValidator.carNames(carNames);

    return carNames;
  }

  // TODO: 입력 값이 숫자인 지에 대한 유효성 검증 필요. 정규표현식 추가해야한다.
  static async getLaps() {
    const laps = await Console.readLineAsync(GUIDE_MESSAGES.laps);

    InputValidator.laps(laps);

    return laps;
  }
}

export default InputView;
