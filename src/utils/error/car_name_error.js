class CarNameError {
  constructor(RACING_CAR) {
    this.RACING_CAR = RACING_CAR;
  }

  carNameNotExist() {
    if (this.RACING_CAR.length === 1 && this.RACING_CAR[0] === '') {
      throw new Error('[ERROR] 경주할 자동차 이름을 입력해주세요.');
    }
    return false;
  }

  carNameNotString() {
    if (this.RACING_CAR.some((carName) => !Number.isNaN(Number(carName)))) {
      throw new Error('[ERROR] 자동차 이름을 문자로 입력해주세요.');
    }
    return false;
  }

  carNameLenOverFive() {
    if (this.RACING_CAR.some((carName) => carName.length > 5)) {
      throw new Error('[ERROR] 자동차 이름을 5자리 이하로 입력해주세요.');
    }
    return false;
  }

  carNameBlank() {
    if (this.RACING_CAR.some((carName) => carName.trim() === '')) {
      throw new Error('[ERROR] 자동차 이름을 공백이 아닌 문자로 입력해주세요.');
    }
    return false;
  }

  carNameDuplication() {
    const SET_RACING_CAR = new Set(this.RACING_CAR);
    if (this.RACING_CAR.length !== SET_RACING_CAR.size) {
      throw new Error('[ERROR] 자동차 이름을 중복 없이 입력해주세요.');
    }
    return false;
  }
}

export default CarNameError;
