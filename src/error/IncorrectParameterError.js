import { ErrorMessage } from "../utils/message/message.js";
import BasicError from "./BasicError.js";

class IncorrectParameterError extends BasicError {
  constructor() {
    super(ErrorMessage.incorrectParameterErrorMessage());
  }
}

export default IncorrectParameterError;
