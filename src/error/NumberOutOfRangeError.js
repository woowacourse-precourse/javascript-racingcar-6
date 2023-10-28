import { ErrorMessage } from "../utils/message/errorMessage.js";
import BasicError from "./BasicError.js";

class NumberOutOfRangeError extends BasicError {
  constructor(num) {
    super(ErrorMessage.numberOutOfRangeErrorMessage(num));
  }
}

export default NumberOutOfRangeError;
