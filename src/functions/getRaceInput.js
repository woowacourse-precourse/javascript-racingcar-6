import { Console } from '@woowacourse/mission-utils';
import { ERROR, MESSAGE } from '../constants/constants.js';
import { isCarNameValidLength, isRaceCountValidNumber } from './validation.js';

const getRaceCars = async () => {
  const cars = [];
  const raceCars = await Console.readLineAsync(`${MESSAGE.INPUT_CARS}\n`);

  raceCars.split(',').forEach((car) => {
    const isValid = isCarNameValidLength(car);
    if (isValid) {
      cars.push(car);
    } else {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    }
  });

  return cars;
};

const getRaceCount = async () => {
  const raceCount = await Console.readLineAsync(`${MESSAGE.INPUT_COUNT}\n`);
  const isValid = isRaceCountValidNumber(raceCount);

  if (!isValid) {
    throw new Error(ERROR.COUNT_FORMAT);
  }

  return raceCount;
};

export { getRaceCars, getRaceCount };
