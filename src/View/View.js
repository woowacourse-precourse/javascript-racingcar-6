import { Console } from '@woowacourse/mission-utils';
import { InputView } from './InputView.js';
import { MESSAGE } from '../constants/Message.js';

// @TODO: 객체에서 클래스로 모듈화
export const View = {
  async readCarNames() {
    return await InputView.inputLine(MESSAGE.NAME);
  },

  async readAttempt() {
    return await InputView.inputLine(MESSAGE.ATTEMPT);
  },

  printResult(result) {
    Console.print(MESSAGE.RESULT);
    result.forEach((round) => {
      round.forEach(({ name, position }) => {
        Console.print(`${name} : ${'-'.repeat(position)}`);
      });
      Console.print('');
    });
  },

  printWinner(winner) {
    Console.print(`${MESSAGE.WINNER}${winner}`);
  },
};
