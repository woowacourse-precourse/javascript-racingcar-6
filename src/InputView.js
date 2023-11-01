import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_CAR, INPUT_ROUND } from './Constant.js';

const inputView = {
  async readCarInput() {
    const inputCar = await MissionUtils.Console.readLineAsync(INPUT_CAR);
    return inputCar;
  },

  async readRoundInput() {
    const inputRound = await MissionUtils.Console.readLineAsync(INPUT_ROUND);
    return inputRound;
  },
};

export default inputView;