import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';
import makeOneSentence from '../util/makeOneSentence.js';

class View {
  static async writeRaingGameCarNames() {
    const cars = await Console.readLineAsync(MESSAGE.START);
    return cars;
  }

  static async writeRacingGameCounts() {
    const counts = await Console.readLineAsync(MESSAGE.COUNT);
    return counts;
  }

  static printRacingGameStart() {
    Console.print(MESSAGE.RUN);
  }

  static printRacingGameRound(roundResult) {
    Console.pring(roundResult);
  }

  static printRacingGameWinners(winners) {
    Console.print(makeOneSentence(MESSAGE.WINNERL, winners));
  }
}

export default View;
