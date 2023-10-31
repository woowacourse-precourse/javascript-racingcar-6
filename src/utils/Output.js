import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/MESSAGE';

// 레이싱 결과 출력
const printRace = (name, position) => {
  Console.print(`${name} : ${'-'.repeat(position)}`);
};

// 최종 우승자 출력
const printWinner = (winner) => {
  if (winner.length <= 1) {
    // 단독 우승
    Console.print(`${OUTPUT.WINNER} : ${winner[0]}`);
  } else {
    // 공동 우승
    Console.print(`${OUTPUT.WINNER} : ${winner.join(', ')}`);
  }
};

export { printRace, printWinner };
