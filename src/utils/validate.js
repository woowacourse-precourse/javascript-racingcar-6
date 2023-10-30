import { CONFIG, ERROR_MESSAGE } from '../constants/constants';

export const validateLength = (carName) => {
  const carNameList = carName.split(',');

  carNameList.forEach((car) => {
    if (car.length > CONFIG.nameMaxLength)
      throw new Error(ERROR_MESSAGE.notLengthFiveOrLess);
  });
};

export const validateIsNumber = (count) => {
  if (Number.isNaN(Number(count)))
    throw new Error(ERROR_MESSAGE.notNumberMoveCount);
};
