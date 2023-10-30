import {
  getNameLengthErrorMessage,
  getNameBlankErrorMessage,
  getNotIntegerErrorMessage,
} from '../constants/errorMessages';

const removeWhiteSpaces = (string) => string.split(' ').join('');

const isNameLengthLessThanOrEqualN = (n) => (name) => {
  if (removeWhiteSpaces(name).length === 0) {
    throw new Error(getNameBlankErrorMessage());
  }

  if (name.length > n) {
    throw new Error(getNameLengthErrorMessage());
  }

  return true;
};

const validateInputCarNames = (carNames) => {
  const isNameLengthLessThanOrEqualFive = isNameLengthLessThanOrEqualN(5);

  return carNames.split(',').every(isNameLengthLessThanOrEqualFive);
};

const validateInputAttemptNumber = (n) => {
  if (!Number.isInteger(n)) {
    throw new Error(getNotIntegerErrorMessage());
  }

  return true;
};

export { validateInputCarNames, validateInputAttemptNumber };
