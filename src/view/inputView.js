import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../Constant/MESSAGE.js';

const inputView = {
  async readCarName() {
    const input = await Console.readLineAsync(MESSAGE.carNameInput);
    return input;
  },

  async readFinalTrackNum() {
    const input = await Console.readLineAsync(MESSAGE.finalTrackInput);
    return input;
  },
};

export default inputView;
