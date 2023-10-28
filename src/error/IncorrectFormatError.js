import { ErrorMessage } from "../utils/message/errorMessage.js";
import BasicError from "./BasicError.js";

class IncorrectFormatError extends BasicError {
  constructor() {
    super(ErrorMessage.incorrectFormatErrorMessage());
  }
}

export default IncorrectFormatError;
