import { errorTryCountMessage } from "./message.js";

class InputTryCountException {
  constructor(tryCount) {
    this.tryCount = tryCount;
  }

  checkTryCountIsNumberException(tryCount) {
    if (typeof tryCount !== "number")
      throw new Error(errorTryCountMessage.INVALID_TRY_COUNT_ISNUMBER);
  }

  checkTryCountMinimumException(tryCount) {
    if (tryCount < 1)
      throw new Error(errorTryCountMessage.INVALID_TRY_COUNT_MIN);
  }

  checkTryCountIsIntegerException(tryCount) {
    if (tryCount !== Math.floor(tryCount))
      throw new Error(errorTryCountMessage.INVALID_TRY_COUNT_TYPE);
  }

  check() {
    this.tryCount = Number(this.tryCount);
    this.checkTryCountIsNumberException(this.tryCount);
    this.checkTryCountMinimumException(this.tryCount);
    this.checkTryCountIsIntegerException(this.tryCount);
    return this.tryCount;
  }
}

export default InputTryCountException;
