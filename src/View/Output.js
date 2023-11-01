import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages';

export default class Output {
  static printTotalResult(totalResult) {
    Console.print(`${OUTPUT_MESSAGE.totalResult}${totalResult}`);
  }

  static printWinners(winners) {
    Console.print(`${OUTPUT_MESSAGE.winner}${winners}`);
  }
}
