import { TRY_INPUT_ERROR } from "../utils/Constants.js";

const ValidationTry = {
  isCorrectTryCount(tryCount) {
    this.isNull(tryCount);
    this.isBlank(tryCount);
    this.isChar(tryCount);
  },

  isNull(tryCount) {
    if (tryCount.length === 0) {
      throw new Error(TRY_INPUT_ERROR.null);
    }
  },

  isBlank(tryCount) {
    if (tryCount.replaceAll(" ", "").length !== tryCount.length) {
      throw new Error(TRY_INPUT_ERROR.blank);
    }
  },

  isChar(tryCount) {
    if (!Number.isNaN(tryCount)) {
      throw new Error(TRY_INPUT_ERROR.char);
    }
  },
};

export default ValidationTry;
