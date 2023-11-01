import { ERROR_MESSAGE } from "../constants/constant.js";

export const validCars = (carsArray) => {
  const CARS_SET = new Set(carsArray);
  if (carsArray?.length !== CARS_SET?.size)
    throw new Error(`[ERROR] ${ERROR_MESSAGE.OVERLAP_NAME}`);

  CARS_SET.forEach((car) => {
    if (car === "") throw new Error(`[ERROR] ${ERROR_MESSAGE.EMPTY_NAME}`);
    else if (car?.length > 5)
      throw new Error(`[ERROR] ${ERROR_MESSAGE.MORE5_NAME}`);
    else if (car.trim() !== car)
      throw new Error(`[ERROR] ${ERROR_MESSAGE.TRIM_EMPTY_NAME}`);
  });
};
