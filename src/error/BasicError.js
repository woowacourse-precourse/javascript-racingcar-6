import { ErrorMessage } from "../utils/message/message.js";

class BasicError extends Error {
  constructor(msg) {
    super(ErrorMessage.basicErrorMessage(msg));
  }
}

export default BasicError;
