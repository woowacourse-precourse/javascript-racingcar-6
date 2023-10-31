import { ErrorMessages } from '../constants/Messages.js';

class AppError extends Error {
  constructor(message) {
    super(`${ErrorMessages.PREFIX} ${message}`);
    this.name = this.constructor.name;
  }
}

export default AppError;
