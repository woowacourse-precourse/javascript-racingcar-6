import { Console } from '@woowacourse/mission-utils';

export default class Output {
  static printTotalResult(totalResult) {
    Console.print(totalResult);
  }

  static printWinners(winners) {
    Console.print(`최종 우승자 : ${winners}`);
  }
}
