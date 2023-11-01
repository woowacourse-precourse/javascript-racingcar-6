import { ERROR } from './Constant.js';

export default class CustomError extends Error {
  constructor(message) {
    super(`${ERROR.PREFIX} ${message}`);
  }
}
