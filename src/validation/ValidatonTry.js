import { TRY_INPUT_ERROR } from "../modules/Constants.js";

const ValidationTry = {
  checkTryCount(tryCount) {
    this.checkNull(tryCount);
    this.checkBlank(tryCount);
    this.checkChar(tryCount);
  },

  checkNull(tryCount) {
    if (tryCount.length === 0) {
      throw new Error(TRY_INPUT_ERROR.null);
    }
  },

  checkBlank(tryCount) {
    if (tryCount.replaceAll(" ", "").length !== tryCount.length) {
      throw new Error(TRY_INPUT_ERROR.blank);
    }
  },

  checkChar(tryCount) {
    if (Number.isNaN(Number(tryCount))) {
      throw new Error(TRY_INPUT_ERROR.char);
    }
  },
};

export default ValidationTry;
