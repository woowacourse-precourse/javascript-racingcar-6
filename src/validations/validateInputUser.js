import {
  getNameLengthErrorMessage,
  getNameBlankErrorMessage,
  getNotIntegerErrorMessage,
  getWhiteSpacesErrorMessage,
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

const isNoWhiteSpaces = (name) => {
  if (removeWhiteSpaces(name).length !== name.length) {
    throw new Error(getWhiteSpacesErrorMessage());
  }

  return true;
};

const validateInputCarNames = (carNames) => {
  const carNamesArray = carNames.split(',');
  const isNameLengthLessThanOrEqualFive = isNameLengthLessThanOrEqualN(5);

  if (!carNamesArray.every(isNameLengthLessThanOrEqualFive)) {
    return false;
  }

  if (!carNamesArray.every(isNoWhiteSpaces)) {
    return false;
  }

  return true;
};

const validateInputAttemptNumber = (n) => {
  if (!Number.isInteger(n)) {
    throw new Error(getNotIntegerErrorMessage());
  }

  return true;
};

export { validateInputCarNames, validateInputAttemptNumber };
