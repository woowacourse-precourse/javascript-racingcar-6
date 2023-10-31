import { ErrorMessages } from '../constants/Messages.js';

export class AppError extends Error {
  constructor(message) {
    super(`${ErrorMessages.PREFIX} ${message}`);
    this.name = this.constructor.name;
  }
}

export default AppError;
