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
    TryCount.validateTryCount(tryValue);
    this._tryNumber = tryValue;
  }

  get tryNumber() {
    return this._tryNumber;
  }

  static validateTryCount(tryValue) {
    tryValue = Number(tryValue);

    if (TryCount.#notZero(tryValue)) {
      throw new Error(TRY_COUNT_VALIDATION.NOT_ZERO);
    }

    if (TryCount.#isNumber(tryValue)) {
      throw new Error(TRY_COUNT_VALIDATION.IS_NAN);
    }
  }

  static #notZero(tryValue) {
    return tryValue < 1;
  }

  static #isNumber(tryValue) {
    return isNaN(tryValue);
  }
}

export default TryCount;
