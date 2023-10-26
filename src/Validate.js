import { MIN_CAR_NUMBER, NAME_LENGTH } from "./constant/rule.js";

class Validate {
  static eachCarNameLength(cars) {
    return cars.every((car) => car.length <= NAME_LENGTH);
  }

  static minCarsLength(cars) {
    return cars.length >= MIN_CAR_NUMBER;
  }
}

export default Validate;
