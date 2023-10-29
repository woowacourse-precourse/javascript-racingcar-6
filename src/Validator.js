import { CAR_NAME_LENGTH, ERROR_MESSAGE } from './constants.js';

export const validateCarName = (carName) => {
  Validator.length(carName);
  Validator.blank(carName);
  Validator.duplication(carName);
  Validator.invalidType(carName);
};

export const validateTryNumber = (tryNumber) => {
  Validator.numberType(tryNumber);
};

const pattern = {
  whitespace: /\s/,
  specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
  emoticon: /[\uD83C-\uDBFF\uDC00-\uDFFF\uD800-\uDBFF\u2700-\u27BF]/,
};

const isBelowNameLength = (input) => input.length <= CAR_NAME_LENGTH;

const isBlank = (input) => input.trim() === '';

const containsWhiteSpace = (input) => {
  return pattern.whitespace.test(input);
};

const containsSpecialChar = (input) => {
  return pattern.specialChar.test(input);
};

const containsEmoticon = (input) => {
  return pattern.emoticon.test(input);
};

const isInvalidType = (input) => {
  return (
    containsWhiteSpace(input) ||
    containsSpecialChar(input) ||
    containsEmoticon(input)
  );
};

const Validator = {
  length(input) {
    if (!input.every(isBelowNameLength)) {
      throw new Error(ERROR_MESSAGE.length);
    }
  },

  blank(input) {
    if (input.some(isBlank)) {
      throw new Error(ERROR_MESSAGE.blank);
    }
  },

  duplication(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(ERROR_MESSAGE.duplicaiton);
    }
  },

  invalidType(input) {
    if (input.some(isInvalidType)) {
      throw new Error(ERROR_MESSAGE.invalidType);
    }
  },

  numberType(input) {
    if (Number.isNaN(input)) {
      throw new Error(ERROR_MESSAGE.numberType);
    }

    if (input <= 0 || input % 1 !== 0) {
      throw new Error(ERROR_MESSAGE.integerType);
    }
  },
};
