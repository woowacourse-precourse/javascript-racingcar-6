import { ErrorMessage } from "../utils/message/errorMessage";

class BasicError extends Error {
  constructor(msg) {
    super(ErrorMessage.basicErrorMessage(msg));
  }
}

export default BasicError;
