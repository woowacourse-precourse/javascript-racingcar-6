import { ERROR, ERRORTYPE } from '../constants/message';

class ValidationError extends Error {
  constructor(message) {
    super(ERROR.displayError + message);
    this.name = ERRORTYPE.validate;
  }
}

export default ValidationError;
