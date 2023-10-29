import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constant.js';

class Output {
  static printProgress(name, progress) {
    Console.print(MESSAGE.progressResult(name, progress));
  }

  static printEmptyLine() {
    Console.print(MESSAGE.progressDivider);
  }

  static printWinner(winner) {
    Console.print(MESSAGE.winnerResult(winner));
  }
}

export default Output;
