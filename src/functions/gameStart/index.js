import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, MESSAGE } from '../../constants/message';

const invalidCarName = carNameList => {
  if (carNameList.length === 1 && carNameList[0] === '')
    throw Error(ERROR_MESSAGE.carName.noInput);

  carNameList.forEach(car => {
    if (car.length > 5) throw Error(ERROR_MESSAGE.carName.tooLong);
    if (car === '') throw Error(ERROR_MESSAGE.carName.noname);
  });

  if (carNameList.length > new Set(carNameList).size)
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
  const carNameList = inputCarName.split(',');

  invalidCarName(carNameList);

  return carNameList;
};

export const getPlayNum = async () => {
  const inputPlayNum = await Console.readLineAsync(MESSAGE.getPlayNum);
  const playCount = Number(inputPlayNum);

  invalidPlayNum(inputPlayNum, playCount);

  return playCount;
};

export const setInitialDistance = carNameList => {
  const racingResult = [];

  carNameList.forEach(car => racingResult.push({ carName: car, distance: '' }));

  return racingResult;
};
