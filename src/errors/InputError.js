import { ERROR_MESSAGES } from '../constants/messages.js';

class InputError extends Error {
  constructor(message) {
    super(`${ERROR_MESSAGES.error} : ${message}`);
  }
}

export default InputError;
