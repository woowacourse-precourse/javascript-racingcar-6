import { Console } from '@woowacourse/mission-utils';
import message from './message.js';

export default class AppView {
  static printGameStart() {
    Console.print(message.START_MESSAGE);
  }

  static printResultHeader() {
    Console.print(message.REPEAT_RESULT_HEAD);
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
