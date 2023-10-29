import { Console } from '@woowacourse/mission-utils';
import { GRANDPRIX_START_NOTIFICATION } from '../constants/GrandPrixMessage.js';
import { LapNumberValidator, RacingCarNameValidator } from '../validator/index.js';

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
    RacingCarNameValidator.generate(racingCarInput).validateRacingCarName();
    return racingCarInput;
  },

  /**
   * @async
   * @public
   * @returns {Promise<string>}
   */
  async readLapNumber() {
    const lapNumberInput = await Console.readLineAsync(GRANDPRIX_START_NOTIFICATION.enterLapNumber);
    LapNumberValidator.generate(lapNumberInput).validateLapNumber();
    return lapNumberInput;
  },
});

export default InputView;
