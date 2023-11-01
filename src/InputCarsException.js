import { errorCarMessage } from "./message.js";

class InputCarsException {
  constructor(cars) {
    this.cars = cars;
  }

  checkCarsNameIsEmptyException(cars) {
    if (cars === "") throw new Error(errorCarMessage.INVALID_CAR_NAME_EMPTY);
  }

  checkCarsNameLengthException(cars) {
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
    // self-feedback: 예외가 있는지 체크하는 곳인데 여기서 문자열 가공을 하는 부분이 들어있다. 이를 다른 객체로 분리해야할 듯 하다.
    // 공백인지 확인해보기
    this.checkCarsNameIsEmptyException(this.cars);
    // 참가 자동차 분리
    this.cars = this.cars.split(",");
    for (let i = 0; i < this.cars.length; i++) {
      // 좌우의 공백을 제거하기
      this.cars[i] = this.cars[i].trim();
      // 중앙에 공백이 없도록 하기
      this.checkCarsNameIsSpacedException(this.cars[i]);
    }
    // 자동차 이름 제한길이 예외처리
    this.checkCarsNameLengthException(this.cars);
    // 자동차 이름 중복 에외처리
    this.checkCarsDuplicateException(this.cars);
    return this.cars;
  }
}

export default InputCarsException;
