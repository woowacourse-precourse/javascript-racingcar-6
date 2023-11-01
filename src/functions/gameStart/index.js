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

const invalidPlayNum = (inputPlayNum, playNum) => {
  if (inputPlayNum.length === 0) throw Error(ERROR_MESSAGE.playNum.noInput);
  if (Number.isNaN(playNum) || !Number.isInteger(playNum) || playNum < 0)
    throw Error(ERROR_MESSAGE.playNum.includeStr);
  if (playNum === 0) throw Error(ERROR_MESSAGE.playNum.includeZero);
};

export const getCarName = async () => {
  const inputCarName = await Console.readLineAsync(MESSAGE.getCarName);
  const carList = inputCarName.split(',');

  invalidCarName(carList);

  return carList;
};

export const getPlayNum = async () => {
  const inputPlayNum = await Console.readLineAsync(MESSAGE.getPlayNum);
  const playNum = Number(inputPlayNum);

  invalidPlayNum(inputPlayNum, playNum);

  return playNum;
};

export const setInitialDistance = carList => {
  const carDistanceList = [];

  carList.forEach(car => carDistanceList.push({ carName: car, distance: '' }));

  return carDistanceList;
};
