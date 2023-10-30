import { GameRule } from '../models/const.js';

export default class Round {
  isValidValue(value) {
    if (this.#isNoValue(value)) {
      return false;
    }

    if (this.#isInvalidRange(value)) {
      return false;
    }

    return true;
  }

  #isNoValue(value) {
    return !value?.trim().length;
  }

  #isInvalidRange(value) {
    const convertedNumber = Number(value);
    return !Number.isInteger(convertedNumber) || GameRule.MinRound > convertedNumber;
  }
}
