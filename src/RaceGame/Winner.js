import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, SYMBOL } from '../constants/Constants';

class Winner {
  constructor(forwardStatus) {
    this.forwardStatus = forwardStatus;
  }

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
