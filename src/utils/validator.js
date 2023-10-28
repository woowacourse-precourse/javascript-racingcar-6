import { ERROR_MESSAGES } from '../constants/index.js';

const PATTERNS = Object.freeze({
  ALPHABETIC: /^[a-zA-Z]{1,5}$/,
  NUMERICL: /^[1-9]\d*$/,
});

export const validator = (pattern, message) => (input) => {
  if (!pattern.test(input)) {
    throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES[message]}`);
  }
  return input;
};

export const validateCarNames = validator(PATTERNS.ALPHABETIC, ERROR_MESSAGES.INVALID_CAR);
export const validateAttempts = validator(PATTERNS.NUMERICL, ERROR_MESSAGES.INVALID_ATTEMPTS);
