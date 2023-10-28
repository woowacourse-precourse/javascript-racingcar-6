import { Console } from '@woowacourse/mission-utils';

class InputMoveCount {
  async getMoveCount() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    this.#validateMoveCount(input);

    return parseInt(input);
  }

  #validateMoveCount(input) {
    if (isNaN(input)) {
      throw new Error('숫자를 입력해주세요.');
    }
    if (input <= 0) {
      throw new Error('1이상의 숫자를 입력해주세요.');
    }
  }
}

export default InputMoveCount;
