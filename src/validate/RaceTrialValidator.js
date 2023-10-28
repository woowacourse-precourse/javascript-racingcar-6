import { ERROR_MESSAGE } from "../constants/Message";

export default class RaceTrialValidator {
  static validateTrial(trial) {
    if (this.isEmptyInput(trial)) {
      throw new Error(ERROR_MESSAGE.emptyInput);
    }
    if (this.hasWhiteSpace(trial)) {
      throw new Error(ERROR_MESSAGE.hasWhiteSpace);
    }
  }

  static isEmptyInput(input) {
    return !input || input.trim().length === 0;
  }
  static hasWhiteSpace(trial) {
    return trial.includes(' ');
  }
}
