import { ERROR_MESSAGE } from "./constants/index.js";

class Validation {
  constructor() {}

  validate(cars) {
    const carsArray = cars.split(",");
    if (!cars.includes(",")) throw new Error(ERROR_MESSAGE.IS_COMMA);
    carsArray.forEach((element) => {
      if (element.length > 5) throw new Error(ERROR_MESSAGE.IS_LENGTH);
    });
    return carsArray;
  }
}

export default Validation;
