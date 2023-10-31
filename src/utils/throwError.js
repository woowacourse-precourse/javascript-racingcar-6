import { ERRORS } from '../constants/errors.js';

export function throwError(message) {
  throw new Error(`${ERRORS.prefix} ${message}`);
}
