import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, SYMBOL } from '../constants/Constants';

class Winner {
  constructor(forward) {
    this.forward = forward;
  }

  getRaceWinner = () => {
    let max = 0;
    let winners = [];

    this.forward.forEach((advance, key) => {
      if (advance.length > max) {
        max = advance.length;
        winners = [key];
      } else if (advance.length === max) {
        winners.push(key);
      }
    });

    Console.print(`${OUTPUT_MESSAGE.winner}${winners.join(`${SYMBOL.comma} `)}`);
  };
}

export default Winner;
