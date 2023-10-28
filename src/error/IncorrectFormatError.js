import { ErrorMessage } from "../utils/message/message.js";
import BasicError from "./BasicError.js";

class IncorrectFormatError extends BasicError {
  constructor() {
    super(ErrorMessage.incorrectFormatErrorMessage());
  }
}

export default IncorrectFormatError;
