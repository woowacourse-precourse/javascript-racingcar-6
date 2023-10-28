import { Console } from '@woowacourse/mission-utils';

class Output {
  static printProgress(name, progress) {
    Console.print(`${name} : ${progress}`);
  }

  static printEmptyLine() {
    Console.print('');
  }

  static printWinner(winner) {
    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default Output;
