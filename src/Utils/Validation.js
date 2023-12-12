import { INPUT_MESSAGE } from '../Constants/MESSAGE.js';

export const checkCarName = (cars) => {
  console.log(cars);
  cars.map((e) => {
    if (e.length > 5) throw new Error(ERROR_MESSAGE.CAR_LENGTH);
  });
};
