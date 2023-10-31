import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGE } from '../constants';
import CarNameValidator from '../models/CarNameValidator';

class InputView {
  async setCarNames() {
    const userInput = await Console.readLineAsync(GUIDE_MESSAGE.carNames);
    const carNames = userInput.split(',').map((carName) => carName.trim());

    CarNameValidator.validateCarName(carNames);

    return carNames;
  }
}

export default InputView;
