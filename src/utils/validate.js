import { ERROR_MESSAGE } from '../constants/constants';

export const validateCarNameLength = (carName) => {
  const carNameList = carName.split(',');

  carNameList.forEach((car) => {
    if (car.length > 5) throw new Error(ERROR_MESSAGE.notLengthFiveOrLess);
  });
};
