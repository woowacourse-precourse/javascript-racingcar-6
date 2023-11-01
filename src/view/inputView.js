import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message.js';

const inputView = {
  async carList() {
    const carList = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.CAR_NAME,
    );
    return carList;
  },

  async moveCount() {
    const moveCount = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.MOVE_COUNT,
    );
    return moveCount;
  },
};

export default inputView;
