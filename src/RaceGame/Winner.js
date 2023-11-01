import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, SYMBOL } from '../Constants/Constants.js';

class Winner {
  constructor(forwardStatus) {
    this.forwardStatus = forwardStatus;
  }

  /**
   * getRaceWinner(): 차수가 모두 끝난 후 가장 많이 전진한 자동차를 판단해 출력하는 메소드
   */
  getRaceWinner = () => {
    let maxAdvance = 0;
    let winners = [];

    this.forwardStatus.forEach((advance, key) => {
      if (advance.length > maxAdvance) {
        maxAdvance = advance.length;
        winners = [key];
      } else if (advance.length === maxAdvance) {
        winners.push(key);
      }
    });

    Console.print(`${OUTPUT_MESSAGE.winner}${winners.join(`${SYMBOL.comma} `)}`);
  };
}

export default Winner;
