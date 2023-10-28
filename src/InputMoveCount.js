import { Console } from '@woowacourse/mission-utils';

class InputMoveCount {
  async getMoveCount() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return parseInt(input);
  }
}

export default InputMoveCount;
