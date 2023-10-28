import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES, GAME_MESSAGES } from "../utils/Message.js";
import { isValidCarName, isValidAttempts } from "../utils/Validation.js";

class InputView {
  static async getCarNames() {
    try {
      const carNames = await MissionUtils.Console.readLineAsync(GAME_MESSAGES.CAR_NAME_INPUT_PROMPT);
      if (!isValidCarName(carNames)) {
        throw new Error(ERROR_MESSAGES.IS_NAME_LENGTH);
      }
      return carNames;
    } catch (error) {
      throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }

  static async getAttempts() {
    try {
      const attempts = await MissionUtils.Console.readLineAsync(GAME_MESSAGES.ATTEMPTS_INPUT_PROMPT);
      if (!isValidAttempts(attempts)) {
        throw new Error(ERROR_MESSAGES.IS_NAME_LENGTH);
      }
      return attempts;
    } catch (error) {
      throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }
}

export default InputView;
