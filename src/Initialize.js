import { Console } from '@woowacourse/mission-utils';
import ERROR_MESSAGES from './constant/errorMessages';
import OUTPUT_MESSAGES from './constant/outputMessage';
import { utils } from './constant/utils';

class Initialize {
  #names;
  #attemptCount;

  constructor() {
    this.#names = [];
    this.#attemptCount = 0;
    this.inputNames = '';
  }

  async inputNamesCheckType() {
    const input = await Console.readLineAsync(OUTPUT_MESSAGES.carNames);
    utils.isString(input);
    this.inputNames = input;
  }

  async inputAttemptCountCheckType() {
    const input = await Console.readLineAsync(OUTPUT_MESSAGES.attemptCount);
    const regularExpression = /^[0-9]+$/;
    utils.isString(input);
    utils.checkMinLength(input);
    if (regularExpression.test(input) === false) {
      throw new Error(ERROR_MESSAGES.outOfRange);
    }
    this.#attemptCount = Number(input);
  }

  pushNames() {
    const names = this.inputNames.split(',');
    names.forEach((name) => {
      utils.checkMinLength(name);
      utils.checkMaxLength(name);
      this.#names.push(name);
    });
  }

  async initializeCarArrayAndNumber() {
    await this.inputNamesCheckType();
    await this.inputAttemptCountCheckType();
    this.pushNames();
    return ({ names: this.#names, attemptCount: this.#attemptCount });
  }
}

export default Initialize;
