export const Validator = {
  isPresent(value) {
    return value != null;
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
    return isNaN(value);
  },

  isNaturalNumber(value) {
    return Number.isInteger(value) && value > 0;
  },
};
