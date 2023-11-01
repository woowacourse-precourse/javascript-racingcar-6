import { MissionUtils } from '@woowacourse/mission-utils';

export default class Printer {
  static printResult() {
    MissionUtils.Console.print('실행 결과');
  }

  static printRound(round) {
    MissionUtils.Console.print(`${round}회차`);
  }

  static printWinner(winner) {
    MissionUtils.Console.print(`최종 우승자 : ${winner}`);
  }
}
