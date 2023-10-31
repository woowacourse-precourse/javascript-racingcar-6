import { ERROR_MESSAGES } from './constants.js';

export const isValidCarNames = (carNames) => {
  if (!isNotEmptyInput(carNames)) throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  return true;
};

const isNotEmptyInput = (input) => {
  return input.length !== 1 || input[0] !== '';
};
