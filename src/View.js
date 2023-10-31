import { Console } from '@woowacourse/mission-utils';
import carValidate from './validation/Car.js';
import carMessages from './messages/Car.js';

import tryMessage from './messages/Try.js';

export const getCarName = async () => {
  const carName = await Console.readLineAsync(carMessages.INPUT);
  const carNames = carName.split(',');
  carValidate(carNames);
  return carNames;
};

export const getTryCount = async () => {
  const tryCount = await Console.readLineAsync(tryMessage.INPUT);
  return tryCount;
};
