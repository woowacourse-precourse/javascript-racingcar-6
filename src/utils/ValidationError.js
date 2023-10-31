import { ERROR } from '../constants/Constant.js';

class ValidationError extends Error {
  constructor(message) {
    super(`${ERROR.errorPrefix} ${message}`);
    this.name = 'ValidationError';
  }
}

export default ValidationError;
