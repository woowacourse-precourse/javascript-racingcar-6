import { Console } from "@woowacourse/mission-utils";
import { GAME_HELP } from "../constants/GAME_HELP.js";
import { TRY_COUNT_VALIDATION } from "../constants/VALIDATION.js";

class TryCount {
  constructor() {
    this._tryNumber = 0;
  }

  async getInputTry() {
    this.tryNumber = await Console.readLineAsync(GAME_HELP.INPUT_TRY);
  }

  set tryNumber(tryValue) {
    tryValue = Number(tryValue);

    this.notZero(tryValue);
    this.isNumber(tryValue);

    this._tryNumber = tryValue;
  }

  get tryNumber() {
    return this._tryNumber;
  }

  notZero(tryValue) {
    if (tryValue === 0) {
      throw new Error(TRY_COUNT_VALIDATION.NOT_ZERO);
    }
  }

  isNumber(tryValue) {
    if (isNaN(tryValue)) {
      throw new Error(TRY_COUNT_VALIDATION.IS_NAN);
    }
  }
}

export default TryCount;
