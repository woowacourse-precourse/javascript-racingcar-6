import { Console } from '@woowacourse/mission-utils';
import { splitByComma } from '../utils/splitByComma.js';
import { validateCarName, validateTryNumber } from '../utils/inputValidator.js';

class InputView {
  
  async getCarName() {
    const carInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    validateCarName(carInput);
    const carNames = splitByComma(carInput);
    return carNames;
  }

  async getTryNumber() {
    const tryInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    validateTryNumber(tryInput);
    const tryNumber = +tryInput;
    return tryNumber;
  }
}

export default InputView;