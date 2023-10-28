import { ERROR_MESSAGE } from "../constants/Message";

export default class RaceTrialValidator {
  static validateTrial(trial) {
    if (this.isEmptyInput(trial)) {
      throw new Error(ERROR_MESSAGE.emptyInput);
    }
  }

  static isEmptyInput(input) {
    return !input || input.trim().length === 0;
  }
}
