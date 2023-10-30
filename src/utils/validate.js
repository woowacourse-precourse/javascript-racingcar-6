import { CONFIG, ERROR_MESSAGE } from '../constants/constants';

export const validateLength = (carName) => {
  const carNameList = carName.split(',');

  carNameList.forEach((carName) => {
    if (carName.length > CONFIG.nameMaxLength)
      throw new Error(ERROR_MESSAGE.notLengthFiveOrLess);
  });

  return carNameList;
};

export const validateIsNumber = (count) => {
  const moveCount = Number(count);
  if (Number.isNaN(moveCount))
    throw new Error(ERROR_MESSAGE.notNumberMoveCount);

  return moveCount;
};
