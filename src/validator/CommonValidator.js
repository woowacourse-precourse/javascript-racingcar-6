import { SYMBOLS } from '../constants/Symbols.js';
import ValidationError from '../error/ValidationError.js';
import { GRANDPRIX_ERROR_NOTIFICATION } from '../constants/GrandPrixError.js';

/**
 * @throws {ValidationError}
 * @param {string} input
 */
const checkInputEmpty = (input) => {
  if (input === SYMBOLS.empty) {
    throw new ValidationError(GRANDPRIX_ERROR_NOTIFICATION.emptyInput);
  }
};

/**
 * @param {string} input - 검사할 문자열
 */
const validateCommon = (input) => {
  const trimmedInput = input.trim();
  checkInputEmpty(trimmedInput);
};

export default validateCommon;
