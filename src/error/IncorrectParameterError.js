import { ErrorMessage } from "../utils/message/errorMessage";
import BasicError from "./BasicError";

class IncorrectParameterError extends BasicError {
  constructor() {
    super(ErrorMessage.incorrectParameterErrorMessage());
  }
}

export default IncorrectParameterError;
