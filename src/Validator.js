import { CAR_NAME_LENGTH, ERROR_MESSAGE } from './constants.js';

export const validateCarName = (carName) => {
  Validator.length(carName);
  Validator.blank(carName);
  Validator.duplication(carName);
};

export const validateTryNumber = (tryNumber) => {
  Validator.numberType(tryNumber);
};

const isBelowNameLength = (input) => input.length <= CAR_NAME_LENGTH;

const isBlank = (input) => input.trim() === '';

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

  numberType(input) {
    if (Number.isNaN(input)) {
      throw new Error(ERROR_MESSAGE.numberType);
    }

    if (input <= 0 || input % 1 !== 0) {
      throw new Error(ERROR_MESSAGE.integerType);
    }
  },
};
