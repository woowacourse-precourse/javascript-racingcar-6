import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, MESSAGE } from '../../constants/message';

const invalidCarName = carNameList => {
  if (carNameList.length === 1 && carNameList[0] === '')
    throw Error(ERROR_MESSAGE.carName.noInput);

  carNameList.forEach(carName => {
    if (carName.length > 5) throw Error(ERROR_MESSAGE.carName.tooLong);
    if (carName === '') throw Error(ERROR_MESSAGE.carName.noName);
  });

  if (carNameList.length > new Set(carNameList).size)
    throw Error(ERROR_MESSAGE.carName.duplicate);
};

const invalidPlayCount = (inputPlayCount, playCount) => {
  if (inputPlayCount.length === 0) throw Error(ERROR_MESSAGE.playCount.noInput);

  if (Number.isNaN(playCount) || !Number.isInteger(playCount) || playCount < 0)
    throw Error(ERROR_MESSAGE.playCount.includeString);

  if (playCount === 0) throw Error(ERROR_MESSAGE.playCount.includeZero);
};

export const getCarName = async () => {
  const inputCarName = await Console.readLineAsync(MESSAGE.getCarName);
  const carNameList = inputCarName.split(',');

  invalidCarName(carNameList);

  return carNameList;
};

export const getPlayCount = async () => {
  const inputPlayCount = await Console.readLineAsync(MESSAGE.getPlayCount);
  const playCount = Number(inputPlayCount);

  invalidPlayCount(inputPlayCount, playCount);

  return playCount;
};

export const setInitialResult = carNameList => {
  const racingResult = [];

  carNameList.forEach(carName => racingResult.push({ carName, distance: '' }));

  return racingResult;
};
