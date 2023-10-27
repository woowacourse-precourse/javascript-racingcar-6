import { CAR, MIN_TRY_COUNT, REGEX, CARS_SEPARATOR } from "./constant/rule.js";

class Validate {
  static eachSideContainComma(cars) {
    if (
      cars[0] === CARS_SEPARATOR.SYMBOL ||
      cars[cars.length - 1] === CARS_SEPARATOR.SYMBOL
    ) {
      return true;
    }

    return false;
  }

  static eachCarNameLength(cars) {
    return cars.every((car) => car.length <= CAR.MAX_NAME_LENGTH);
  }

  static minCarsLength(cars) {
    return cars.length >= CAR.MIN_CARS_LENGTH;
  }

  static eachCarNameHasBlank(cars) {
    return cars.some((car) => REGEX.BLINK.test(car));
  }

  static anyDuplicateCarName(cars) {
    const set = new Set(cars);

    if (set.size !== cars.length) {
      return true;
    }

    return false;
  }

  static isNumber(value) {
    return REGEX.ONLY_NUMBER.test(value);
  }

  static minTryCount(count) {
    return count >= MIN_TRY_COUNT;
  }
}

export default Validate;
