import { Console } from '@woowacourse/mission-utils';
import Message from '../constant/Message.js';

export default class OutputView {
  static printTryResult() {
    Console.print(Message.TRY_RESULT);
  }

  /**
   * 자동차의 움직인 길이만큼 '-'를 출력합니다.
   * @param {string[]} [자동차 목록]
   */
  static printSingleTryResult(carList) {
    carList.forEach((car) => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getMove())}`);
    });
    Console.print('');
  }

  /**
   * 우승한 자동차를 출력합니다.
   * @param {string[]} [우승한 자동차 목록]
   */
  static printWinner(carList) {
    Console.print(
      Message.FINAL_WINNER + carList.map((car) => car.getName()).join(', '),
    );
  }
}
