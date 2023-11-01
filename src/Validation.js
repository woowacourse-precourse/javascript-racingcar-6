import { ERROR_MESSAGES } from './Constants.js';

export const isValidCarNames = (carNames) => {
  if (!isNotEmptyCarNames(carNames)) throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  if (!carNames.every(isValidCarNameLength))
    throw new Error(ERROR_MESSAGES.NOT_VALID_CARNAME_LENGTH);
  return true;
};

export const isValidTryNum = (input) => {
  if (!isNotEmptyTryNum(input)) throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  if (!isNumber(input)) throw new Error(ERROR_MESSAGES.INCLUDE_NON_NUMERIC_VALUES);
  return true;
};

const isNotEmptyCarNames = (input) => {
  return input.length !== 0;
};

const isValidCarNameLength = (carName) => {
  return carName.length !== 0 && carName.length <= 5;
};

const isNotEmptyTryNum = (input) => {
  return input !== undefined;
};

const isNumber = (input) => {
  return !input.includes(' ') && !Number.isNaN(Number(input));
};
