import Interface from './Interface.js';
import Validator from './Validator.js';
import InputException from './InputException.js';

class Input {
  static async enterCarNames() {
    try {
      let carNames = await Interface.requestValueforContent('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
      carNames = Validator.evaluateCarNames(carNames);
      return carNames;
    } catch (errorCode) {
      throw new InputException(errorCode);
    }
  }

  static async enterTryingCount() {
    try {
      let tryingCount = await Interface.requestValueforContent('시도할 횟수');
      tryingCount = parseInt(tryingCount, 10);
      Validator.evaluateTryinCount(tryingCount);
      return tryingCount;
    } catch (errorCode) {
      throw new InputException(errorCode);
    }
  }
}

export default Input;
