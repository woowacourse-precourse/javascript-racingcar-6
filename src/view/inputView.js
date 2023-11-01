import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../Constant/MESSAGE.js';
import CarNameValidation from '../Validation/CarNameValidation.js';
import TrackCntValidation from '../Validation/TrackCntValidation.js';

const inputView = {
  async readCarName() {
    const input = await Console.readLineAsync(MESSAGE.carNameInput);
    new CarNameValidation(input);
    return input;
  },

  async readFinalTrackNum() {
    const input = await Console.readLineAsync(MESSAGE.finalTrackInput);
    new TrackCntValidation(input);
    return input;
  },
};

export default inputView;
