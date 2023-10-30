import { TRY_INPUT_ERROR } from "./Constants.js";

const ValidationTry = {
  isNull(tryCount) {
    if (tryCount.length === 0) {
      throw new Error(TRY_INPUT_ERROR.null);
    }
  },

  isChar(tryCount) {
    if (Number.isNaN(tryCount)) {
      throw new Error(TRY_INPUT_ERROR.char);
    }
  },
};

export default ValidationTry;
