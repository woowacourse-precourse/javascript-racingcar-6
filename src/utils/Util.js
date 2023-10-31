import ERROR from '../constants/Error.js';

function throwError(message, condition) {
  if (condition) {
    return;
  }
  throw new Error(`${ERROR.PREFIX}${message}${ERROR.TRY_AGAIN}`);
}

const Conditions = {
  isPresent(value) {
    return value !== '';
  },

  isMoreThanOne(value) {
    return value.includes(',');
  },

  isContainSpace(value) {
    return !/\s/.test(value);
  },

  isCorrectLength(value) {
    return value.length <= 5;
  },

  isDuplicate(arr) {
    return new Set(arr).size === arr.length;
  },

  isNumber(value) {
    return !Number.isNaN(value);
  },

  isNaturalNumber(value) {
    return Number.isInteger(Number(value)) && Number(value) > 0;
  },
};

export { throwError, Conditions };
