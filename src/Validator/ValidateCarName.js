import { ERROR_MESSAGE, REGEXP } from '../Constants/Constants.js';

class ValidateCarName {
  /**
   * isValidLength(): 자동차 이름 길이 검증 메소드 (5자리 이하 문자열)
   * 입력 검증 후 true 또는 false 반환
   */
  isValidLength = (carNames) => {
    const LENGTH_REGEX = REGEXP.lengthRegex;
    return carNames.every((name) => LENGTH_REGEX.test(name));
  };

  /**
   * isValidString(): 자동차 문자열 검증 메소드 (영문자만 가능)
   * 입력 검증 후 true 또는 false 반환
   */
  isValidString = (carNames) => {
    const NAME_REGEX = REGEXP.nameRegex;
    return carNames.every((name) => NAME_REGEX.test(name));
  };

  /**
   * isValidDuplication(): 자동차 이름 중복 검증 메소드
   * 입력 검증 후 true 또는 false 반환
   */
  isValidDuplication = (carNames) => {
    const carSet = new Set(carNames);
    return carSet.size === carNames.length;
  };

  /**
   * isValidCarNames(): 자동차 이름 검증 결과에 따른 에러 처리 메소드
   * 입력 검증 후 false일 경우 에러 처리 후 애플리케이션 종료
   */
  isValidCarNames = (carNames) => {
    if (!this.isValidLength(carNames)) {
      throw new Error(ERROR_MESSAGE.lengthError);
    }

    if (!this.isValidString(carNames)) {
      throw new Error(ERROR_MESSAGE.stringError);
    }

    if (!this.isValidDuplication(carNames)) {
      throw new Error(ERROR_MESSAGE.duplicationError);
    }
  };
}

export default ValidateCarName;
