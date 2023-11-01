import ERROR from '../constants/error.js';
import MessageFormat from '../utils/messageFormat.js';

class CustomError extends Error {
  constructor(message, name) {
    super(MessageFormat.error(message));
    this.name = name || this.constructor.name;
  }

  static InputView(message) {
    return new CustomError(message, ERROR.name.inputView);
  }

  static Car(message) {
    return new CustomError(message, ERROR.name.car);
  }

  static RacingGame(message) {
    return new CustomError(message, ERROR.name.racingGame);
  }
}

export default CustomError;
