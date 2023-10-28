import { ERROR } from './constants.js';

const Validate = {
  inputCarName(name) {
    if (this.isOverFiveLetters(name)) {
      throw new Error(ERROR.OVER_FIVE_LETTERS);
    }
  },

  inputNumberOfTry(count) {
    if (this.isNotNumberType(count)) {
      throw new Error(ERROR.NAN);
    }
  },

  isNotNumberType(number) {
    return isNaN(number);
  },

  isOverFiveLetters(word) {
    return word.length > 5 ? true : false;
  },
};

export default Object.freeze(Validate);
