import { ERROR_MESSAGE } from "../constants/constant";

export function validCars(carsArray) {
  carsArray.forEach((car) => {
    if (car === "") throw new Error(`[ERROR] ${ERROR_MESSAGE.EMPTY_NAME}`);

    else if (car.length > 5) throw new Error(`[ERROR] ${ERROR_MESSAGE.MORE5_NAME}`);

    else if (car.trim() !== car) throw new Error(`[ERROR] ${ERROR_MESSAGE.TRIM_EMPTY_NAME}`);
  });
}
