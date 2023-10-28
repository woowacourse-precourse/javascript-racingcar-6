import { ERROR_PREFIX } from '../constants/GrandPrixMessage.js';

export default class DefaultError extends Error {
  constructor(message) {
    super(message);
    this.message = `${ERROR_PREFIX} ${message}`;
    this.name = this.constructor.name;
  }
}
