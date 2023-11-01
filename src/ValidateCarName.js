class ValidateCarName {
  constructor() {}

  isValidLength = (cars) => {
    const LENGTH_REGEX = /^.{1,5}$/;
    return cars.every((name) => LENGTH_REGEX.test(name));
  };

  isValidString = (cars) => {
    const NAME_REGEX = /^[A-Za-z]*$/;
    return cars.every((name) => NAME_REGEX.test(name));
  };

  isValidDuplication = (cars) => {
    const carSet = new Set(cars);
    return carSet.size === cars.length;
  };

  isValid = (cars) => {
    if (!this.isValidLength(cars)) {
      throw new Error('[ERROR] 1글자에서 5글자 사이의 이름만 입력 가능합니다.');
    }

    if (!this.isValidString(cars)) {
      throw new Error('[ERROR] 영문으로 이루어진 이름만 입력 가능합니다.');
    }

    if (!this.isValidDuplication(cars)) {
      throw new Error('[ERROR] 중복되는 이름은 입력할 수 없습니다.');
    }
  };
}

export default ValidateCarName;
