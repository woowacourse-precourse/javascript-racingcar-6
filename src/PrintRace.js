import { MissionUtils } from '@woowacourse/mission-utils';

export class PrintRace {
  static printFoward(car) {
    MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.foward)}`);
  }

  static printEmptyLine() {
    MissionUtils.Console.print('');
  }

  static printWinners(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}
