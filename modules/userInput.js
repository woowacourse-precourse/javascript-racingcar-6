import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constant.js';

const getCarNames = async () => {
  const carNames = await Console.readLineAsync(MESSAGE.enterCarNames);
  return carNames;
};

const getTryNumber = async () => {
  const tryNumber = await Console.readLineAsync(MESSAGE.enterTryNumber);
  Console.print(MESSAGE.executeResult);

  return tryNumber;
};

export { getCarNames, getTryNumber };
