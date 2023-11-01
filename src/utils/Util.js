import ERROR from '../constants/Error.js';
import NUMBER from '../constants/Number.js';
import CHARACTER from '../constants/Character.js';

function throwError(message, condition) {
  if (condition) {
    return;
  }
  throw new Error(`${ERROR.PREFIX}${message}${ERROR.TRY_AGAIN}`);
}

const Conditions = {
  isPresent(value) {
    return value !== CHARACTER.EMPTY;
  },

  isMoreThanOne(value) {
    return value.includes(CHARACTER.COMMA);
  },

  isContainSpace(value) {
    return !/\s/.test(value);
  },

  isCorrectLength(value) {
    return value.length <= NUMBER.MAX_LENGTH;
  },

  isDuplicate(arr) {
    return new Set(arr).size === arr.length;
  },

  isNumber(value) {
    return !Number.isNaN(value);
  },

  isNaturalNumber(value) {
    return Number.isInteger(Number(value)) && Number(value) > NUMBER.ZERO;
  },
};

export { throwError, Conditions };
