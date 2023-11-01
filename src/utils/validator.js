import AppError from '../errors/AppError.js';
import { CONSTANTS } from '../constants/index.js';

const REGEX_PATTERNS = Object.freeze({
  ALPHABETIC: /^[a-zA-Z]{1,5}$/,
  NUMERICAL: /^(?:[1-9]|[1-9][0-9]|100)$/,
});

export const createValidator = (pattern, message) => (input) => {
  if (!pattern.test(input)) {
    throw new AppError(`${message}`);
  }
  return input;
};

export const validateCarNames = createValidator(
  REGEX_PATTERNS.ALPHABETIC,
  CONSTANTS.ERROR_MESSAGES.INVALID_CAR,
);
export const validateAttempts = createValidator(
  REGEX_PATTERNS.NUMERICAL,
  CONSTANTS.ERROR_MESSAGES.INVALID_ATTEMPTS,
);
