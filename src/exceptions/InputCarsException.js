import { errorCarMessage } from "../global/message";

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

  check() {
    this.checkCarsNameIsEmptyException(this.cars);
    this.cars = this.cars.split(",");
    this.checkCarsNameException(this.cars);
    this.checkCarsDuplicateException(this.cars);
    return this.cars;
  }
}

export default InputCarsException;
