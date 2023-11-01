import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, MESSAGE } from '../../constants/message';

const invalidCarName = carList => {
  if (carList.length === 1 && carList[0] === '')
    throw Error(ERROR_MESSAGE.carName.noInput);

  carList.forEach(car => {
    if (car.length > 5) throw Error(ERROR_MESSAGE.carName.tooLong);
    if (car === '') throw Error(ERROR_MESSAGE.carName.noname);
  });

  if (carList.length > new Set(carList).size)
    throw Error(ERROR_MESSAGE.carName.duplicate);
};

const invalidPlayNum = (inputPlayNum, playCount) => {
  if (inputPlayNum.length === 0) throw Error(ERROR_MESSAGE.playNum.noInput);

  if (Number.isNaN(playCount) || !Number.isInteger(playCount) || playCount < 0)
    throw Error(ERROR_MESSAGE.playNum.includeStr);

  if (playCount === 0) throw Error(ERROR_MESSAGE.playNum.includeZero);
};

export const getCarName = async () => {
  const inputCarName = await Console.readLineAsync(MESSAGE.getCarName);
  const carList = inputCarName.split(',');

  invalidCarName(carList);

  return carList;
};

export const getPlayNum = async () => {
  const inputPlayNum = await Console.readLineAsync(MESSAGE.getPlayNum);
  const playCount = Number(inputPlayNum);

  invalidPlayNum(inputPlayNum, playCount);

  return playCount;
};

export const setInitialDistance = carList => {
  const racingResult = [];

  carList.forEach(car => racingResult.push({ carName: car, distance: '' }));

  return racingResult;
};
