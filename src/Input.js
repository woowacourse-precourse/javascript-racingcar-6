import Interface from './Interface.js';
import Validator from './Validator.js';
import InputException from './InputException';

class Input {
  static async enterCarNames() {
    try {
      const carNames = await Interface.requestValueforContent('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
      Validator.evaluateCarNames(carNames);
      return carNames.split(',');
    } catch (errorCode) {
      throw new InputException(errorCode);
    }
  }

  static async enterTryingCount() {
    try {
      const tryingCount = await Interface.requestValueforContent('시도할 횟수');
      Validator.evaluteTryingCount(tryingCount);
    } catch (errorCode) {
      throw new InputException(errorCode);
    }
  }
}

export default Input;
