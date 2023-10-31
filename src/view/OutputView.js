import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/Messages';

export default class OutputView {
  static printRaceHeader() {
    Console.print(MESSAGES.RACE_HEADER);
  }

  static printRoundResult(roundResults) {
    roundResults.forEach((result) => {
      Console.print(`${result.name} : ${result.representation}`);
    });
    Console.print(' ');
  }

  static printWinners(winnersString) {
    Console.print(MESSAGES.FINAL_WINNER + winnersString);
  }
}
