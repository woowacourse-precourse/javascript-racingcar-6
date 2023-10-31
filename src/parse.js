import CONSTANTS from './constants';

export const parseCarNames = input => {
  const splited = input.split(',').filter(name => name.length !== 0);

  const carCount = splited.length;

  if (carCount === 1) {
    throw new Error(CONSTANTS.ERRORS.ONLY_ONE);
  }

  const commasCount = Array.from(input).filter(c => c === ',').length;

  if (carCount !== commasCount + 1) {
    throw new Error(CONSTANTS.ERRORS.BAD_INPUT);
  }

  const nameLengthLimit = 5;

  const isLengthOverLimit = value => value.length > nameLengthLimit;

  if (splited.some(isLengthOverLimit)) {
    throw new Error(CONSTANTS.ERRORS.OVER_LIMIT);
  }

  const containsBlank = value => value.includes(' ');

  if (splited.some(containsBlank)) {
    throw new Error(CONSTANTS.ERRORS.CONTAINS_BLANK);
  }

  const deduplicated = new Set(splited);

  if (splited.length !== deduplicated.size) {
    throw new Error(CONSTANTS.ERRORS.DUPLICATE_VALUE);
  }

  return splited;
};

export const parseNumberOfAttempts = input => {
  if (input.includes('.')) {
    throw new Error(CONSTANTS.ERRORS.NOT_INTEGER);
  }

  const parsed = Number.parseInt(input, 10);

  if (Number.isNaN(parsed)) {
    throw new Error(CONSTANTS.ERRORS.NOT_CONVERTABLE);
  }

  if (!Number.isSafeInteger(parsed)) {
    throw new Error(CONSTANTS.ERRORS.UNSAFE_INTEGER);
  }

  return parsed;
};
