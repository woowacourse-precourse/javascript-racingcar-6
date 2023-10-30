import { ERROR_MESSAGE } from '../constant/message.js';

export const isWithinFourToNine = (number) => number >= 4 && number <= 9;

export const isDecimalChar = (character) => /^[0-9]$/.test(character);

export const isValidateNumber = (string) => {
  Array.from(string).forEach((digit) => {
    if (!isDecimalChar(digit))
      throw new Error(ERROR_MESSAGE.wrongGameCountInput);
  });
};

export const isNumberWithinBounds = (number, startNumber, endNumber) => {
  if (number < startNumber || number > endNumber) {
    throw new Error(ERROR_MESSAGE.wrongGameCountInput);
  }
};

export const isLengthWithinBounds = (string, startNumber, endNumber) => {
  if (string.length < startNumber || string.length > endNumber) {
    throw new Error(ERROR_MESSAGE.wrongNameInput);
  }
};

export const isDuplicateString = (string, array) => {
  if (array.includes(string)) {
    throw new Error(ERROR_MESSAGE.duplicateNameInput);
  }
};

export const isContainString = (string, seperator) => {
  if (!string.includes(seperator)) {
    throw new Error(ERROR_MESSAGE.wrongNameInput);
  }
};

export const isEmptyString = (string, message) => {
  if (string.trim() === '') {
    throw new Error(message);
  }
};
