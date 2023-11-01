import { errorCarMessage } from "./message.js";

class InputCarsException {
  constructor(cars) {
    this.cars = cars;
  }

  checkIsNameEmpty(cars) {
    if (cars === "") throw new Error(errorCarMessage.INVALID_CAR_NAME_EMPTY);
  }

  checkNameLength(cars) {
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].length > 5)
        throw new Error(errorCarMessage.INVALID_CAR_NAME_LENGTH);
    }
  }

  checkDuplicate(cars) {
    let checkDuplicateSet = new Set();
    for (const car of cars) {
      if (checkDuplicateSet.has(car)) {
        throw new Error(errorCarMessage.INVALID_CAR_NAME_DUPLICATE);
      }
      checkDuplicateSet.add(car);
    }
  }

  checkIsNameSpacedBetween(cars) {
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].includes(" "))
        throw new Error(errorCarMessage.INVALID_CAR_NAME_DUPLICATE);
    }
  }

  check() {
    this.checkIsNameEmpty(this.cars);
    this.checkIsNameSpacedBetween(this.cars);
    this.checkNameLength(this.cars);
    this.checkDuplicate(this.cars);
  }
}

export default InputCarsException;
