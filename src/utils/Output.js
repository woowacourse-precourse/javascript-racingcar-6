import { Console } from '@woowacourse/mission-utils';

// 레이싱 결과 출력
const printRace = (name, position) => {
  Console.print(`${name} : ${'-'.repeat(position)}`);
};

// 최종 우승자 출력
const printWinner = (winner) => {
  if (winner.length <= 1) {
    // 단독 우승
    Console.print(`최종 우승자 : ${winner[0]}`);
  } else {
    // 공동 우승
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
};

export { printRace, printWinner };
