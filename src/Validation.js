import { ERROR_MESSAGES } from './constants.js';

export const isValidCarNames = (carNames) => {
  if (!isNotEmptyInput(carNames)) throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  if (!carNames.every(isValidLength)) throw new Error(ERROR_MESSAGES.NOT_VALID_CARNAME_LENGTH);
  return true;
};

const isNotEmptyInput = (input) => {
  return input.length !== 1 || input[0] !== '';
};

const isValidLength = (carName) => {
  return carName.length !== 0 && carName.length <= 5;
};
