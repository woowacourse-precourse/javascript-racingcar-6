class Validate {
  static carsValidate(cars) {
    if (cars === undefined) {
      throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
    }
    cars.split(',').forEach((car) => {
      if (car.length > 5) {
        throw new Error('[ERROR] 자동차 이름의 길이가 5 초과 입니다.');
      }
    });
    return cars;
  }

  static tryNumberValidate(tryNumber) {
    if (Number.isInteger(tryNumber)) {
      throw new Error('[ERROR] 정수로 된 숫자를 입력해주세요.');
    } else if (tryNumber <= 0) {
      throw new Error('[ERROR] 양수를 입력해주세요.');
    }
    return tryNumber;
  }
}

export default Validate;
