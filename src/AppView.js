import { Console } from '@woowacourse/mission-utils';

export default class AppView {
  static printInstruction() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
  }

  static printResultHeader() {
    Console.print('\n실행 결과');
  }

  static printCarStatus(name, distance) {
    Console.print(`${name} : ${'-'.repeat(distance)}`);
  }

  static printGap() {
    Console.print('');
  }

  static printWinner(winnersName) {
    Console.print(`최종 우승자 : ${winnersName}`);
  }
}
