import message from "../Constants.js";

const Validator = {
  validateCarNames(names) {
    if (this.isCarNameHasBlank(names)) {
      throw new Error(message.ERROR.nameBlankError);
    }

    if (this.isCarNameGreaterThanFive(names)) {
      throw new Error(message.ERROR.nameLengthError);
    }

    if (this.isDuplicated(names)) {
      throw new Error(message.ERROR.nameDuplicateError);
    }
  },

  validateTryCount(number) {
    if (!this.isNumeric(number)) {
      throw new Error(message.ERROR.tryCountNumericError);
    }
  },

  isCarNameHasBlank(names) {
    return names.find((name) => name.includes(message.BLANK));
  },

  isCarNameGreaterThanFive(names) {
    return names.some((name) => name.length > 5);
  },

  isDuplicated(names) {
    if (names.length !== new Set(names).size) {
      return true;
    }
  },

  isNumeric(tryCount) {
    return Number.isInteger(tryCount) && tryCount > 0;
  },
};

export default Validator;