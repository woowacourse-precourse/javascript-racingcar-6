import { Console } from '@woowacourse/mission-utils';
import { carMessages, tryMessage } from './Messages';
import { carValidate, tryValidate } from './Validation';

export const getCarName = async () => {
  const carName = await Console.readLineAsync(carMessages.INPUT);
  const carNames = carName.split(',');
  carValidate(carNames);
  return carNames;
};

export const getTryCount = async () => {
  const tryCount = await Console.readLineAsync(tryMessage.INPUT);
  tryValidate(tryCount);
  return tryCount;
};
