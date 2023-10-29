import { ErrorMessage, PromptMessage } from "../views/Messages.js";
import { Console } from "@woowacourse/mission-utils";

class Attempt {
  async getRaceAttempt() {
    const getRaceAttempt = await Console.readLineAsync(
      PromptMessage.ENTER_ATTEMPT
    );
    this.attemptCount = parseInt(getRaceAttempt);

    if (isNaN(getRaceAttempt) !== false) {
      throw new Error(ErrorMessage.INVALID_INPUT);
    }
  }
}

export default Attempt;
