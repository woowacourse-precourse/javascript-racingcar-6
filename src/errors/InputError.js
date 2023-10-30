import { ERROR_HEADER } from '../constants/messages.js';

class InputError extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.message = `${ERROR_HEADER} ${message}`;
    this.name = 'InputError';
  }
}

export default InputError;
