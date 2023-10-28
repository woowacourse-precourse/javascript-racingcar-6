import { ErrorMessage } from "../utils/message/errorMessage.js";
import BasicError from "./BasicError.js";

class IncorrectParameterError extends BasicError {
  constructor() {
    super(ErrorMessage.incorrectParameterErrorMessage());
  }
}

export default IncorrectParameterError;
