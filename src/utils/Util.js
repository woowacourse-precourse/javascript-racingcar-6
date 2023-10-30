import { ERROR } from '../constants/Error.js';

export function throwError(message, condition) {
  if (condition) {
    return;
  }
  throw new Error(`${ERROR.PREFIX}` + message + `${ERROR.TRY_AGAIN}`);
}

export const Conditions = {
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
    return !isNaN(value);
  },

  isNaturalNumber(value) {
    return Number.isInteger(Number(value)) && Number(value) > 0;
  },
};
