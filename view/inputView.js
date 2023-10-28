import { Console } from '@woowacourse/mission-utils';
import { splitByComma } from '../utils/splitByComma';
import { validateCarName } from '../utils/inputValidator'

class InputView {
  async getCarName() {
    const carInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    validateCarName(carInput);
    const carNames = splitByComma(carInput);
    return carNames;
  }
}

export default InputView;