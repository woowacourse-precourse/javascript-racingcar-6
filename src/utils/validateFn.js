import { ERROR_MESSAGE } from '../constant/message';

export const validateCarName = (carListArr) => {
  carListArr.forEach((carName) => {
    if (carName.length < 1 || carName.length > 5)
      throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH);
    else if (carName.split('').find((element) => element === ' '))
      throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME_CHAR);
  });

  if (carListArr.length !== new Set(carListArr).size)
    throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME_UNIQUE);
};

export const validateMoveNum = (moveNum) => {
  if (parseInt(moveNum).toString() !== moveNum)
    throw new Error(ERROR_MESSAGE.INVALID_INPUT_TYPE);
  else if (parseInt(moveNum) < 1)
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
};
