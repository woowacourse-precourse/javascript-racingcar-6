import ERROR_MESSAGE from '../constants/errorMessage';
import messagePrinter from '../utils/messagePrinter';

class TrialNum {
  #trials;

  constructor(trialNum) {
    this.#trials = trialNum;
    this.validate();
  }

  validate() {
    this.validateIsNumber();
    this.validateNumberRange();
    this.validateNoSpace();
  }

  validateIsNumber() {
    if (Number.isNaN(this.#trials)) {
      messagePrinter.errorPrint(ERROR_MESSAGE.not_number);
    }
  }

  validateNumberRange() {
    if (this.#trials < 1) {
      messagePrinter.errorPrint(ERROR_MESSAGE.less_than_one_trial);
    }
  }

  validateNoSpace() {
    if (typeof this.#trials === 'string' && this.#trials.includes(' ')) {
      messagePrinter.errorPrint(ERROR_MESSAGE.has_space);
    }
  }

  getTrials() {
    return this.#trials;
  }
}

export default TrialNum;
