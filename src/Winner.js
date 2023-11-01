import { Console } from '@woowacourse/mission-utils';

class Winner {
  constructor(forward) {
    this.forward = forward;
  }

  getRaceWinner = () => {
    let max = 0;
    let winners = [];

    this.forward.forEach((advance) => {
      if (advance.length > max) {
        max = advance.length;
      }
    });

    this.forward.forEach((advance, key) => {
      if (max === advance.length) {
        winners.push(key);
      }
    });

    Console.print(`\n최종 우승자 : ${winners.join(', ')}`);
  };
}

export default Winner;
