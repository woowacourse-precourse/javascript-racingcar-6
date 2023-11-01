import ERROR_MESSAGES from '../constants/ErrorMessages.js';

export default function validateCarNames(carNamesInput) {
  if (!carNamesInput.every((carName) => carName.length > 0)) {
    throw new Error(ERROR_MESSAGES.underNameLength);
  }
  if (carNamesInput.some((carName) => carName.length > 5)) {
    throw new Error(ERROR_MESSAGES.overNameLength);
  }
  if (new Set(carNamesInput).size !== carNamesInput.length) {
    throw new Error(ERROR_MESSAGES.duplicatedName);
  }
}
