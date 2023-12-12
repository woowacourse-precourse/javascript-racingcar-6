import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../Constants/MESSAGE';

export const InputView = {
  async readCarName() {
    let cars = await Console.readLineAsync(INPUT_MESSAGE.CAR);
    cars = cars.slice(',');
    return input;
  },
  async readTryNum() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.TRY);
    return input;
  },
};
