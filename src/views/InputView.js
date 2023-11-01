import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../constants/messages.js';
import SYMBOLS from '../constants/symbols.js';
import CarNamesValidator from '../models/CarNamesValidator.js';
import LapsValidator from '../models/LapsValidator.js';
import removeWhiteSpace from '../utils/removeWhiteSpace.js';

class InputView {
  constructor() {
    this.carNamesValidator = new CarNamesValidator();
    this.lapsValidator = new LapsValidator();
  }

  /**
   * 경주에 참가할 자동차 이름들을 input으로 받는 메소드
   * @returns {string[]}
   */
  async getCarNames() {
    const { comma } = SYMBOLS;
    const input = await Console.readLineAsync(GUIDE_MESSAGES.carNames);
    const carNames = input.split(comma).map(carName => carName.trim());

    this.carNamesValidator.isValid(carNames);

    return carNames;
  }

  /**
   * 자동차 경주를 시도할 횟수를 input으로 받는 메소드
   * @returns {number}
   */
  async getLaps() {
    const input = await Console.readLineAsync(GUIDE_MESSAGES.laps);
    const laps = removeWhiteSpace(input);

    this.lapsValidator.isValid(laps);

    return parseInt(laps, 10);
  }
}

export default InputView;
