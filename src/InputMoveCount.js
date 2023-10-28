import { Console } from '@woowacourse/mission-utils';

class InputMoveCount {
  async getMoveCount() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const moveCount = Number(input);

    this.#validateMoveCount(moveCount);

    return moveCount;
  }

  #validateMoveCount(input) {
    if (isNaN(input)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
    if (input <= 0) {
      throw new Error('[ERROR] 1이상의 숫자를 입력해주세요.');
    }
    if (!Number.isInteger(input)) {
      throw new Error('[ERROR] 정수를 입력해주세요.');
    }
  }
}

export default InputMoveCount;
