import { Console } from '@woowacourse/mission-utils';
import Message from '../constant/Message.js';
import Validation from '../utils/Validation.js';

export default class InputView {
  static async getCarName() {
    const carNames = await Console.readLineAsync(Message.RACE_START);
    const carNameList = carNames.split(',');
    Validation.carNameInput(carNameList);

    return carNameList;
  }

  static async getTryCount() {
    const tryCount = await Console.readLineAsync(Message.TRY);
    const tryCountNumber = Number(tryCount);
    Validation.tryCountInput(tryCountNumber);

    return tryCountNumber;
  }
}
