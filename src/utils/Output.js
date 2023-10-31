import { Console } from '@woowacourse/mission-utils';

// 레이싱 결과 출력
const printRace = (name, position) => {
  Console.print(`${name} : ${'-'.repeat(position)}`);
};

export { printRace };
