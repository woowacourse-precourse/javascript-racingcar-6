import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages';

const RACE_CONSOLE_VIEW = {
  getUserInputCarName() {
    return Console.readLineAsync(MESSAGES.INPUT_CAR_NAME);
  },
  getUserInputMaxRound() {
    return Console.readLineAsync(MESSAGES.INPUT_TRY_NUMBER);
  },
};

export default RACE_CONSOLE_VIEW;
