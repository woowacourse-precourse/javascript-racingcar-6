import { GameRule } from '../models/const.js';

export default class Round {
  #racingState;

  constructor(racingState) {
    this.#racingState = racingState;
  }

  isValidValue(value) {
    if (this.#isNoValue(value)) {
      return false;
    }

    if (this.#isInvalidRange(value)) {
      return false;
    }

    this.#racingState.round = Number(value);

    return true;
  }

  #isNoValue(value) {
    return !value?.trim().length;
  }

  #isInvalidRange(value) {
    const convertedNumber = Number(value);
    return !Number.isInteger(convertedNumber) || GameRule.MinRound > convertedNumber;
  }

  minusOneRound() {
    this.#racingState.round = this.#racingState.currentState.round - 1;
  }
}
