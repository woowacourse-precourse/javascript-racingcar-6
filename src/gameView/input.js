import { Console } from '@woowacourse/mission-utils';
import { GAME } from '../utils/constants.js';

class Input {
  async getRacingcarsNames() {
    const racingcarNames = await Console.readLineAsync(
      GAME.INPUT_CAR_NAMES,
    );
    return racingcarNames;
  }

  async getNumberOfAttempt() {
    const NumberOfAttemps = await Console.readLineAsync(GAME.INPUT_NUMBER_OF_ATTEMPTS);
    return NumberOfAttemps;
  }
}
export default Input;
