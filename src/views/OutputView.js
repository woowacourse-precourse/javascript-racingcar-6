import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES, SYMBOLS } from '../utils/constants.js';

class OutputView {
  printResultHeader() {
    Console.print(GAME_MESSAGES.resultHeader);
  }

  printRoundResult(result) {
    Console.print(result + '\n');
  }

  printWinners(winners) {
    const winnersString = winners.join(SYMBOLS.winnerNameSeparator);
    Console.print(GAME_MESSAGES.winnerPrefix + winnersString);
  }
}

export default OutputView;
