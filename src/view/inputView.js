import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message.js';

const inputView = {
  async carList() {
    const carList = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.CAR_NAME,
    );
    return carList;
  },
};

export default inputView;
