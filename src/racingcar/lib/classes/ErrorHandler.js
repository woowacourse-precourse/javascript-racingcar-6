class ErrorHandler {
  static validateRacingCarName(carNameList) {
    if (carNameList.length === 1) {
      throw new Error('[ERROR] 경주할 자동차의 목록은 2개 이상이어야 합니다.');
    }
    carNameList.forEach((carName) => {
      if (carNameList.filter((name) => name === carName).length >= 2) {
        throw new Error('[ERROR] 경주할 자동차의 이름은 중복될 수 없습니다.');
      }
      if (carName.length > 5) {
        throw new Error('[ERROR] 경주할 자동차의 이름은 5자 이하여야 합니다.');
      }
    });
  }

  static validatePlayCount(playCount) {
    const regex = /^[0-9]+$/;
    if (!regex.test(playCount)) {
      throw new Error('[ERROR] 시도할 횟수를 숫자로 입력해주세요.');
    }
    if (playCount <= 0) {
      throw new Error('[ERROR] 시도할 횟수를 1 이상으로 입력해주세요.');
    }
  }
}

export default ErrorHandler;
