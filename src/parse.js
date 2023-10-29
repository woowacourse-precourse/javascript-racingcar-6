import CONSTANTS from './constants';

const parseCarNames = async input => {
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

  const isLengthOverLimit = value => value > nameLengthLimit;

  if (splited.some(isLengthOverLimit)) {
    throw new Error(CONSTANTS.ERRORS.OVER_LIMIT);
  }

  return splited;
};
