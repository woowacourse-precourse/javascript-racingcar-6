import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES, SYMBOLS } from '../utils/constants.js';

class OutputView {
  printResultHeader() {
    Console.print(GAME_MESSAGES.resultHeader);
  }

  printResult(result) {
    Console.print(result + '\n');
  }

  printWinners(winners) {
    const winnersString = winners.join(SYMBOLS.commaWithSpace);
    Console.print(GAME_MESSAGES.winnerAnnouncementHeader + winnersString);
  }
}

export default OutputView;
