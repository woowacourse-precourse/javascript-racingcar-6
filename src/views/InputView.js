import { Console } from '@woowacourse/mission-utils';
import CarNameValidator from '../models/CarNameValidator';

class InputView {
  async setCarNames() {
    const userInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const carNames = userInput.split(',').map((carName) => carName.trim());

    CarNameValidator.validateCarName(carNames);

    return carNames;
  }
}

export default InputView;
