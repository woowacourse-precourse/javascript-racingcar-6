import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, MESSAGE } from '../../constants/message';

const invalidCarName = carList => {
  if (carList.length === 0) throw Error(ERROR_MESSAGE.carName.noInput);

  carList.forEach(car => {
    if (car.length > 5) throw Error(ERROR_MESSAGE.carName.tooLong);
    if (car === '' || car === ' ') throw Error(ERROR_MESSAGE.carName.noInput);
  });

  if (carList.length > new Set(carList).length)
    throw Error(ERROR_MESSAGE.carName.duplicate);
};

export const getCarName = async () => {
  const inputCarName = await Console.readLineAsync(MESSAGE.getCarName);
  const carList = inputCarName.split(',');

  invalidCarName(carList);

  return carList;
};

export const getPlayNum = async () => {
  const inputPlayNum = await Console.readLineAsync(MESSAGE.getPlayNum);
  const playNum = parseInt(inputPlayNum, 10);

  // TODO : 시도할 횟수 유효검사

  return playNum;
};
