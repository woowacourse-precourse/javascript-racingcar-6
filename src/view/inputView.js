import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../Constant/MESSAGE.js';

const inputView = {
  async readCarName() {
    const input = await Console.readLineAsync(MESSAGE.car_name_input);
    return input;
  },

  async readFinalTrackNum() {
    const input = await Console.readLineAsync(MESSAGE.final_track_input);
    return input;
  },
};

export default inputView;
