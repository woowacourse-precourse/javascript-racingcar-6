import { errorTryCountMessage } from "../global/message";

class InputTryCountException {
  constructor(tryCount) {
    this.tryCount = tryCount;
  }

  checkTryCountIsNumberException(tryCount) {
    if (typeof this.tryCount !== "number")
      throw new Error(errorTryCountMessage.INVALID_TRY_COUNT_ISNUMBER);
  }

  checkTryCountMinimumException(tryCount) {
    if (this.tryCount < 1)
      throw new Error(errorTryCountMessage.INVALID_TRY_COUNT_MIN);
  }

  checkTryCountIsIntegerException(tryCount) {
    if (this.tryCount !== Math.floor(this.tryCount))
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
