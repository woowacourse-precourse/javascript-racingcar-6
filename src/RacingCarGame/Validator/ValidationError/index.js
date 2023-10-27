import { ERROR } from '../../constants/index.js';

class ValidationError extends Error {
  constructor(message) {
    super(`${ERROR.prefix} ${message}`);
    this.name = this.constructor.name;
  }
}

export default ValidationError;
