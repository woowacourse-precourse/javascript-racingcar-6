import { Console } from '@woowacourse/mission-utils';
import carValidate from './validation/Car.js';
import carMessages from './messages/Car.js';

export const getCarName = async () => {
  const carName = await Console.readLineAsync(carMessages.INPUT);
  const carNames = carName.split(',');
  carValidate(carNames);
  return carNames;
};
