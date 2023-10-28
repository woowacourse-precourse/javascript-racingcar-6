import { ErrorMessage } from "../utils/message/message.js";
import BasicError from "./BasicError.js";

class OutOfRangeError extends BasicError {
  constructor(num) {
    super(ErrorMessage.outOfRangeErrorMessage(num));
  }
}

export default OutOfRangeError;
