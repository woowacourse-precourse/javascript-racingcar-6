import { ERRORS, COUNT_REGEX } from '../constants/Constants.js';

export const validateInputEmpty = (input) => {
  if (input === null || input === undefined || input === '') {
    throw new Error(ERRORS.null);
  }
};

export const validateCarNameUnique = (input) => {
  if (new Set(input).size !== input.length) {
    throw new Error(ERRORS.carName.duplicate);
  }
};

export const validateCarNameLength = (input) => {
  if (input.length > 5) {
    throw new Error(ERRORS.carName.length);
  }
};

export const validateGameCountType = (input) => {
  if (Number.isNaN(Number(input))) {
    throw new Error(ERRORS.gameCount.type);
  }
};

export const validateGameCountRange = (input) => {
  if (!COUNT_REGEX.test(input)) {
    throw new Error(ERRORS.gameCount.range);
  }
};
