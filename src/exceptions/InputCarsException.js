import { errorCarMessage } from "../global/message.js";

class InputCarsException {
  constructor(cars) {
    this.cars = cars;
  }

  checkCarsNameIsEmptyException(cars) {
    if (cars === "") throw new Error(errorCarMessage.INVALID_CAR_NAME_EMPTY);
  }

  checkCarsNameException(cars) {
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].length > 5)
        throw new Error(errorCarMessage.INVALID_CAR_NAME_LENGTH);
    }
  }

  checkCarsDuplicateException(cars) {
    let checkDuplicate = [];
    for (let i = 0; i < cars.length; i++) {
      if (checkDuplicate.includes(cars[i])) {
        throw new Error(errorCarMessage.INVALID_CAR_NAME_DUPLICATE);
      }
      checkDuplicate.push(cars[i]);
    }
  }

  checkCarsNameIsSpacedException(cars) {
    if (cars.includes(" "))
      throw new Error(errorCarMessage.INVALID_CAR_NAME_DUPLICATE);
  }

  check() {
    this.checkCarsNameIsEmptyException(this.cars);
    this.cars = this.cars.split(",");
    for (let i = 0; i < this.cars.length; i++) {
      this.cars[i] = this.cars[i].trim();
      this.checkCarsNameIsSpacedException(this.cars[i]);
    }
    this.checkCarsNameException(this.cars);
    this.checkCarsDuplicateException(this.cars);
    return this.cars;
  }
}

export default InputCarsException;
