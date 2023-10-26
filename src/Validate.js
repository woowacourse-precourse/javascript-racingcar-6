import { NAME_LENGTH } from "./constant/rule.js";

class Validate {
  static eachCarNameLength(cars) {
    return cars.every((car) => car.length <= NAME_LENGTH);
  }
}

export default Validate;
