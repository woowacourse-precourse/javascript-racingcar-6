import { Console } from '@woowacourse/mission-utils';
import { GAME } from '../constants/constants';
import { OUTPUT_MESSAGE } from '../constants/messages';

class OutputView {
  static printCurrentResult(carName, position) {
    const currentPosition = OUTPUT_MESSAGE.carPosition.repeat(position);
    Console.print(`${carName} : ${currentPosition}`);
  }

  static printWinners(winners) {
    const winner = winners.join(GAME.joinDelimiter);
    Console.print(`${OUTPUT_MESSAGE.winner} : ${winner}`);
  }
}

export default OutputView;
