import { Console } from '@woowacourse/mission-utils';
import { RACING_MESSAGE } from '../constants/constants.js';

const inputView = {
  /** 자동차 이름 입력받는 함수 */
  async readCarNames() {
    /** @type {string} */
    const carNames = await Console.readLineAsync(RACING_MESSAGE.READ_CAR_NAMES);
    return carNames;
  },

  /** 이동 횟수 입력받는 함수 */
  async readMoveCount() {
    /** @type {number} */
    const count = await Console.readLineAsync(RACING_MESSAGE.READ_MOVE_COUNT);
    return count;
  },
};

export default inputView;
