import { ERROR_MESSAGES, REGEX_PATTERNS } from '../constants/index.js';

import AppError from '../errors/AppError.js';

export const createValidator = (pattern, message) => (input) => {
  if (!pattern.test(input)) {
    throw new AppError(`${message}`);
  }
  return input;
};

export const validateCarNames = createValidator(REGEX_PATTERNS.ALPHABETIC, ERROR_MESSAGES.INVALID_CAR);
export const validateAttempts = createValidator(REGEX_PATTERNS.NUMERICL, ERROR_MESSAGES.INVALID_ATTEMPTS);
