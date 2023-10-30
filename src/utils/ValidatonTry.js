import { TRY_INPUT_ERROR } from "./Constants.js";

const ValidationTry = {
  isNull(tryCount) {
    if (tryCount.length === 0) {
      throw new Error(TRY_INPUT_ERROR.null);
    }
  },
};

export default ValidationTry;
