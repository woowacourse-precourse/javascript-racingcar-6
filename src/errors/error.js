import ERROR from '../constants/error.js';

const formatMessage = (message) => `[ERROR] ${message}`;

class CustomError extends Error {
  constructor(message, name) {
    super(formatMessage(message));
    this.name = name || this.constructor.name;
  }

  static InputView(message) {
    return new CustomError(message, ERROR.name.inputView);
  }
}

export default CustomError;
