import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants.js';

const Message = {
  printEnterCarNames() {
    return MissionUtils.Console.readLineAsync(MESSAGE.ENTER_CAR_NAMES);
  },

  printEnterTry() {
    return MissionUtils.Console.readLineAsync(MESSAGE.ENTER_TRY);
  },

  printResultComment() {
    return MissionUtils.Console.print(MESSAGE.OUTCOME);
  },

  printResult(result) {
    const comments = result.map(({ name, steps }) => MESSAGE.tellResult({ name, steps })).join('');
    return MissionUtils.Console.print(comments);
  },

  printAnnounceWinners(winners) {
    return MissionUtils.Console.print(MESSAGE.announceWinners(winners));
  },
};

export default Object.freeze(Message);
