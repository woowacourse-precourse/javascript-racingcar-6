import { ERROR_MESSAGE } from "../constants/Message";

export default class RaceTrialValidator {
  static validateTrial(trial) {
    if (this.isEmptyInput(trial)) {
      throw new Error(ERROR_MESSAGE.emptyInput);
    }
    if (this.hasWhiteSpace(trial)) {
      throw new Error(ERROR_MESSAGE.hasWhiteSpace);
    }
    if (this.isNotNumber(trial)) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }
  }

  static isEmptyInput(input) {
    return !input || input.trim().length === 0;
  }

  static hasWhiteSpace(trial) {
    return trial.includes(' ');
  }

  static isNotNumber(trial) {
    return isNaN(trial) || trial.includes('.');
  }
}
