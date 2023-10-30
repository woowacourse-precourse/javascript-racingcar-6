import { ERRORS } from '../constants/errors';

export function throwError(message) {
  throw new Error(`${ERRORS.prefix} ${message}`);
}
