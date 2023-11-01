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
    if (this.isNotNaturalNumber(trial)) {
      throw new Error(ERROR_MESSAGE.notNaturalNumber);
    }
  }

  static isEmptyInput(input) {
    return !input || input.trim().length === 0;
  }

  static hasWhiteSpace(trial) {
    return trial.includes(" ");
  }

  static isNotNumber(trial) {
    return isNaN(trial) || trial.includes(".");
  }

  static isNotNaturalNumber(trial) {
    return parseInt(trial) <= 0;
  }
}
