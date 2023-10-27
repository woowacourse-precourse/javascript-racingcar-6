import { CAR, MIN_TRY_COUNT, REGEX, SEPARATOR } from "./constant/rule.js";
import { ERROR } from "./constant/message.js";

class Validate {
  checkEnteredCarsIsValid(enteredCars) {
    if (this.eachSideContainComma(enteredCars)) {
      throw new Error(ERROR.CARS_START_AND_END_WITH_COMMA);
    }
  }

  checkEachOfCarsIsValid(cars) {
    if (!this.eachCarNameLength(cars)) {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    }

    if (!this.minCarsLength(cars)) {
      throw new Error(ERROR.CARS_LENGTH);
    }

    if (this.eachCarNameHasBlank(cars)) {
      throw new Error(ERROR.CAR_NAME_HAS_BLANK);
    }

    if (this.anyDuplicateCarName(cars)) {
      throw new Error(ERROR.CARS_NAME_DUPLICATED);
    }
  }

  eachSideContainComma(cars) {
    return (
      cars[0] === SEPARATOR.CARS.SYMBOL ||
      cars[cars.length - 1] === SEPARATOR.CARS.SYMBOL
    );
  }

  eachCarNameLength(cars) {
    return cars.every(
      (car) =>
        car.length >= CAR.MIN_NAME_LENGTH && car.length <= CAR.MAX_NAME_LENGTH
    );
  }

  minCarsLength(cars) {
    return cars.length >= CAR.MIN_CARS_LENGTH;
  }

  eachCarNameHasBlank(cars) {
    return cars.some((car) => REGEX.BLINK.test(car));
  }

  anyDuplicateCarName(cars) {
    const set = new Set(cars);

    return set.size !== cars.length;
  }

  checkTryCountIsValid(count) {
    if (!this.isNumber(count)) {
      throw new Error(ERROR.COUNT_IS_NOT_NUMBER);
    }

    if (!this.minTryCount(count)) {
      throw new Error(ERROR.COUNT_LESS_THAN_MIN);
    }
  }

  isNumber(value) {
    return REGEX.ONLY_NUMBER.test(value);
  }

  minTryCount(count) {
    return count >= MIN_TRY_COUNT;
  }
}

export default Validate;
