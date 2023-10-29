import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

export default class Output {
  static printTotalResult(totalResult) {
    Console.print(totalResult);
  }

  static printWinners(winners) {
    Console.print(`${OUTPUT_MESSAGE.winner}${winners}`);
  }
}
