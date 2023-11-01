import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/MESSAGE';

const printRace = (name, position) => {
  Console.print(`${name} : ${'-'.repeat(position)}`);
};

const printWinner = (winner) => {
  if (winner.length === 0) {
    Console.print(OUTPUT.NO_WINNER);
  } else if (winner.length <= 1) {
    Console.print(`${OUTPUT.WINNER} : ${winner[0]}`);
  } else {
    Console.print(`${OUTPUT.WINNER} : ${winner.join(', ')}`);
  }
};

export { printRace, printWinner };
