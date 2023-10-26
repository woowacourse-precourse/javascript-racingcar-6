import {
  BLINK_REGEX,
  MIN_CAR_NUMBER,
  NAME_LENGTH,
  ONLY_NUMBER_REGEX,
} from "./constant/rule.js";

class Validate {
  static eachCarNameLength(cars) {
    return cars.every((car) => car.length <= NAME_LENGTH);
  }

  static minCarsLength(cars) {
    return cars.length >= MIN_CAR_NUMBER;
  }

  static eachCarNameHasBlank(cars) {
    return cars.some((car) => BLINK_REGEX.test(car));
  }

  static isNumber(value) {
    return ONLY_NUMBER_REGEX.test(value);
  }
}

export default Validate;
