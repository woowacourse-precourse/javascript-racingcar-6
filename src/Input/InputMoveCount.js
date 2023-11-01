import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES, ERROR_MESSAGES } from '../utils/messages';

class InputMoveCount {
  async getMoveCount() {
    const input = await Console.readLineAsync(
      OUTPUT_MESSAGES.input_move_count_message,
    );
    const moveCount = Number(input);

    this.validateMoveCount(moveCount);

    return moveCount;
  }

  validateMoveCount(input) {
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGES.not_a_number);
    }
    if (input <= 0) {
      throw new Error(ERROR_MESSAGES.not_positive_integer);
    }
    if (!Number.isInteger(input)) {
      throw new Error(ERROR_MESSAGES.not_an_integer);
    }
  }
}

export default InputMoveCount;
