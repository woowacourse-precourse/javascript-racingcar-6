import { Console } from '@woowacourse/mission-utils';
import { GRANDPRIX_START_NOTIFICATION } from '../constants/GrandPrixMessage.js';

const InputView = Object.freeze({
  async readRacingCarNames() {
    const racingCarInput = await Console.readLineAsync(
      GRANDPRIX_START_NOTIFICATION.enterRacingCarName,
    );
    return racingCarInput;
  },

  async readLapNumber() {
    const lapNumberInput = await Console.readLineAsync(GRANDPRIX_START_NOTIFICATION.enterLapNumber);
    return lapNumberInput;
  },
});

export default InputView;
