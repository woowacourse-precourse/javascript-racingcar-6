import { ERROR_MESSAGES } from './Constants.js';

export const isValidCarNames = (carNames) => {
  if (!isEmptyCarNames(carNames)) throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  if (!carNames.every(isValidCarNameLength)) throw new Error(ERROR_MESSAGES.INVALID_CARNAME_LENGTH);
  return true;
};

export const isValidTryNum = (input) => {
  if (!isEmptyTryNum(input)) throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  if (isIncludeBlank(input)) throw new Error(ERROR_MESSAGES.INCLUDE_BLANK);
  if (!isNumber(input)) throw new Error(ERROR_MESSAGES.NOT_NUMBER);
  if (isSmallerThanOne(input)) throw new Error(ERROR_MESSAGES.SMALLER_THAN_ONE);

  return true;
};

const isEmptyCarNames = (carNames) => {
  return carNames.length !== 0;
};

const isValidCarNameLength = (carName) => {
  return carName.length !== 0 && carName.length <= 5;
};

const isEmptyTryNum = (input) => {
  return input !== undefined;
};

const isIncludeBlank = (input) => {
  return input.includes(' ');
};

const isNumber = (input) => {
  const tryNum = Number(input);
  return !Number.isNaN(tryNum);
};

const isSmallerThanOne = (input) => {
  const tryNum = Number(input);
  return tryNum < 1;
};
