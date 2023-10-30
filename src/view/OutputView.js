import { Console } from '@woowacourse/mission-utils';
import Message from '../constant/Message.js';

export default class OutputView {
  static printNewLine() {
    Console.print('');
  }

  static printTryResult() {
    Console.print(Message.TRY_RESULT);
  }

  static printSingleTryResult(carList) {
    carList.forEach((car) => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getMove())}`);
    });
    Console.print('');
  }
}
