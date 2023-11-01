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

  checkIsNameSpaced(cars) {
    if (cars.includes(" "))
      throw new Error(errorCarMessage.INVALID_CAR_NAME_DUPLICATE);
  }

  check() {
    // self-feedback: 예외가 있는지 체크하는 곳인데 여기서 문자열 가공을 하는 부분이 들어있다. 이를 다른 객체로 분리해야할 듯 하다.
    this.checkIsNameEmpty(this.cars);

    this.cars = this.cars.split(",");

    for (let i = 0; i < this.cars.length; i++) {
      this.cars[i] = this.cars[i].trim();
      this.checkIsNameSpaced(this.cars[i]);
    }

    this.checkNameLength(this.cars);
    this.checkDuplicate(this.cars);

    return this.cars;
  }
}

export default InputCarsException;
