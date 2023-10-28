import { ERROR_HEADER } from '../constants/messages';

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
