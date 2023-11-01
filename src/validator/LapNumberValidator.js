import ValidationError from '../error/ValidationError.js';
import { GRANDPRIX_ERROR_NOTIFICATION } from '../constants/GrandPrixError.js';
import validateCommon from './CommonValidator.js';

/**
 * @throws {ValidationError}
 * @param {string} input
 */
const checkInvalidCharacter = (input) => {
  if (Number.isNaN(Number(input))) {
    throw new ValidationError(GRANDPRIX_ERROR_NOTIFICATION.invalidCharactor);
  }
};

/**
 * @throws {ValidationError}
 * @param {string} input
 */
const checkIntegerNumber = (input) => {
  if (!Number.isInteger(Number(input))) {
    throw new ValidationError(GRANDPRIX_ERROR_NOTIFICATION.invalidNumber);
  }
};

/**
 * @throws {ValidationError}
 * @param {string} input
 */
const checkNegativeIntegerNumber = (input) => {
  if (Number(input) < 0) {
    throw new ValidationError(GRANDPRIX_ERROR_NOTIFICATION.invalidInteger);
  }
};

/**
 * @param {string} input - 검사할 문자열
 */
const validateLapNumber = (input) => {
  validateCommon(input);
  checkInvalidCharacter(input);
  checkIntegerNumber(input);
  checkNegativeIntegerNumber(input);
};

export default validateLapNumber;
