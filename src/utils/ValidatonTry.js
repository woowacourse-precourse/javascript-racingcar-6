import { TRY_INPUT_ERROR } from "./Constants.js";

const ValidationTry = {
  isCorrectTryCount(tryCount) {
    this.isNull(tryCount);
    this.isChar(tryCount);
    this.isBlank(tryCount);
  },

  isNull(tryCount) {
    if (tryCount.length === 0) {
      throw new Error(TRY_INPUT_ERROR.null);
    }
  },

  isChar(tryCount) {
    if (!Number.isNaN(tryCount)) {
      throw new Error(TRY_INPUT_ERROR.char);
    }
  },

  isBlank(tryCount) {
    if (tryCount.trim().length !== tryCount.length) {
      throw new Error(TRY_INPUT_ERROR.blank);
    }
  },
};

export default ValidationTry;
