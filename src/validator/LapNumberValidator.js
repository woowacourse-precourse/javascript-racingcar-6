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
 * @param {string} input - 검사할 문자열
 */
const validateLapNumber = (input) => {
  validateCommon(input);
  checkInvalidCharacter(input);
};

export default validateLapNumber;
