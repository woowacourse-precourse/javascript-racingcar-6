import { RacingGameState } from "../constants/game.js";
import { ErrorMessage } from "../utils/message/message.js";
import BasicError from "./BasicError.js";

class OutOfRangeError extends BasicError {
  constructor(num = RacingGameState.MAX_NAME_LENGTH) {
    super(ErrorMessage.outOfRangeErrorMessage(num));
  }
}

export default OutOfRangeError;
