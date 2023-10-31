import { SYMBOLS } from '../constants/Symbols.js';
import ValidationError from '../error/ValidationError.js';
import { GRANDPRIX_ERROR_NOTIFICATION } from '../constants/GrandPrixError.js';
import validateCommon from './CommonValidator.js';
import { GRANDPRIX_GAME_OPTION } from '../constants/GrandPrixOption.js';

/**
 * @throws {ValidationError}
 * @param {string} input
 */
const checkInvalidNameLength = (input) => {
  const splitInput = input.split(SYMBOLS.comma);

  splitInput.forEach((name) => {
    if (
      name.length > GRANDPRIX_GAME_OPTION.maxInputLength ||
      name.length < GRANDPRIX_GAME_OPTION.minInputLength
    ) {
      throw new ValidationError(GRANDPRIX_ERROR_NOTIFICATION.invalidNameLength);
    }
  });
};

/**
 * @throws {ValidationError}
 * @param {string} input
 */
const checkDuplicatedName = (input) => {
  const splitInput = input.split(SYMBOLS.comma);
  const inputSet = new Set(splitInput);

  if (splitInput.length !== inputSet.size) {
    throw new ValidationError(GRANDPRIX_ERROR_NOTIFICATION.duplicatedName);
  }
};

/**
 * @param {string} input - 검사할 문자열
 */
const validateRacingCarName = (input) => {
  validateCommon(input);
  checkInvalidNameLength(input);
  checkDuplicatedName(input);
};

export default validateRacingCarName;
