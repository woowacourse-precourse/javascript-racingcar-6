import { CAR_NAME_LENGTH, ERROR_MESSAGE } from './constants.js';

const pattern = {
  whitespace: /\s/,
  specialCharacter: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
  emoticon: /[\uD83C-\uDBFF\uDC00-\uDFFF\uD800-\uDBFF\u2700-\u27BF]/,
};

const isBelowNameLength = (input) => input.length <= CAR_NAME_LENGTH;

const isBlank = (input) => input.trim() === '';

const containsWhiteSpace = (input) => pattern.whitespace.test(input);

const containsSpecialCharacter = (input) =>
  pattern.specialCharacter.test(input);

const containsEmoticon = (input) => pattern.emoticon.test(input);

function isInvalidType(input) {
  return (
    containsWhiteSpace(input) ||
    containsSpecialCharacter(input) ||
    containsEmoticon(input)
  );
}

const Validator = {
  length(input) {
    if (!input.every(isBelowNameLength)) throw ERROR_MESSAGE.length;
  },

  blank(input) {
    if (input.some(isBlank)) throw ERROR_MESSAGE.blank;
  },

  duplication(input) {
    if (new Set(input).size !== input.length) throw ERROR_MESSAGE.duplication;
  },

  invalidType(input) {
    if (input.some(isInvalidType)) throw ERROR_MESSAGE.invalidType;
  },

  numberType(input) {
    if (Number.isNaN(input)) throw ERROR_MESSAGE.numberType;

    if (input <= 0 || input % 1 !== 0) throw ERROR_MESSAGE.integerType;
  },
};

export const validateCarName = (carName) => {
  Validator.length(carName);
  Validator.blank(carName);
  Validator.duplication(carName);
  Validator.invalidType(carName);
};

export const validateTryNumber = (tryNumber) => {
  Validator.numberType(tryNumber);
};
