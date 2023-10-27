import { CAR, MIN_TRY_COUNT, REGEX, SEPARATOR } from "./constant/rule.js";

class Validate {
  static eachSideContainComma(cars) {
    return (
      cars[0] === SEPARATOR.CARS.SYMBOL ||
      cars[cars.length - 1] === SEPARATOR.CARS.SYMBOL
    );
  }

  static eachCarNameLength(cars) {
    return cars.every(
      (car) =>
        car.length >= CAR.MIN_NAME_LENGTH && car.length <= CAR.MAX_NAME_LENGTH
    );
  }

  static minCarsLength(cars) {
    return cars.length >= CAR.MIN_CARS_LENGTH;
  }

  static eachCarNameHasBlank(cars) {
    return cars.some((car) => REGEX.BLINK.test(car));
  }

  static anyDuplicateCarName(cars) {
    const set = new Set(cars);

    return set.size !== cars.length;
  }

  static isNumber(value) {
    return REGEX.ONLY_NUMBER.test(value);
  }

  static minTryCount(count) {
    return count >= MIN_TRY_COUNT;
  }
}

export default Validate;
