import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../Constants/MESSAGE.js';
import { checkCarName, checkTryNum } from '../Utils/Validation.js';

export const InputView = {
  async readCarName() {
    let cars = await Console.readLineAsync(INPUT_MESSAGE.CAR);
    cars = cars.split(',');

    checkCarName(cars);
    return cars;
  },
  async readTryNum() {
    const tryNum = await Console.readLineAsync(INPUT_MESSAGE.TRY);
    checkTryNum(tryNum);
    return tryNum;
  },
};
