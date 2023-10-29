import { MissionUtils } from '@woowacourse/mission-utils';

export class ConsoleView {
    static printRace(car) {
        MissionUtils.Console.print(`${car.name}: ${'-'.repeat(car.position)}`);
    }

    static printEmptyLine() {
        MissionUtils.Console.print('');
    }

    static printWinners(winners) {
        MissionUtils.Console.print(`최종 우승자: ${winners.join(', ')}`);
    }
}
