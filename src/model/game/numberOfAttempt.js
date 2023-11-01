import { Console } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "../../utils/constants.js";

class NumberOfAttempt {
  constructor(inputNumber) {
    this.NumberOfAttempt = inputNumber;
    this.validateNumber();
  }

  validateNumber() {
    Console.print(this.NumberOfAttempt);
    if (!Number.isInteger(Number(this.NumberOfAttempt))) {
      throw new Error(ERROR.INVALID_NUMBER);
    }
    if (this.NumberOfAttempt <= 0) {
      throw new Error(ERROR.INVALID_NEGATIVE_INTEGER);
    }
  }

  isFinished() {
    if (this.NumberOfAttempt === GAME.FINISH_THRESHOLD) {
      return true;
    }
    return false;
  }

  decrease() {
    this.NumberOfAttempt -= GAME.ATTEMPT_DECREASE_AMOUNT;
  }
}
export default NumberOfAttempt;
