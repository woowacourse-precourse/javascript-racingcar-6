import { ERRORS, COUNTREGEX } from '../Constants';

export const checkNullValidation = (input) => {
  if (input === null || input === undefined || input === '') {
    throw new Error(ERRORS.null);
  }
};

export const checkCarNameDuplicateValidation = (input) => {
  if (new Set(input).size !== input.length) {
    throw new Error(ERRORS.carName.duplicate);
  }
};

export const checkCarNameLengthValidation = (input) => {
  if (input.length > 5) {
    throw new Error(ERRORS.carName.length);
  }
};

export const checkCountTypeValidation = (input) => {
  if (isNaN(input)) {
    throw new Error(ERRORS.gameCount.type);
  }
};

export const checkCountRangeValidation = (input) => {
  if (!COUNTREGEX.test(input)) {
    throw new Error(ERRORS.gameCount.range);
  }
};
