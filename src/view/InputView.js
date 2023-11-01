import { Console } from '@woowacourse/mission-utils';
import { GRANDPRIX_START_NOTIFICATION } from '../constants/GrandPrixMessage.js';
import { validateLapNumber, validateRacingCarName } from '../validator/index.js';

const InputView = Object.freeze({
  /**
   * @async
   * @public
   * @returns {Promise<string>}
   */
  async readRacingCarNames() {
    const racingCarInput = await Console.readLineAsync(
      GRANDPRIX_START_NOTIFICATION.enterRacingCarName,
    );
    validateRacingCarName(racingCarInput);
    return racingCarInput;
  },

  /**
   * @async
   * @public
   * @returns {Promise<string>}
   */
  async readLapNumber() {
    const lapNumberInput = await Console.readLineAsync(GRANDPRIX_START_NOTIFICATION.enterLapNumber);
    validateLapNumber(lapNumberInput);
    return lapNumberInput;
  },
});

export default InputView;
