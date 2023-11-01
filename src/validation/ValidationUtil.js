import { ERROR_MESSAGE } from '../Constants.js';

class ValidationUtil {
  // 입력값에 ','가 있는지 검증
  static isNoComma(input) {
    if (!input.includes(',')) {
      throw new Error(ERROR_MESSAGE.NO_COMMA);
    }
  }

  // 입력을 안하진 않았는지 검증
  static isemptyInput(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGE.NO_INPUT);
    }
  }

  // 쉼표 뒤에 아무것도 입력하지 않았을 때 에러 발생
  static isNoInputafterComma(carName) {
    if (carName === '') {
      throw new Error(ERROR_MESSAGE.NO_INPUT_AFTER_COMMA);
    }
  }

  // 5자를 초과 했을 때 에러 발생
  static isexceedsFiveCharacters(carName) {
    if (carName.length > 5) {
      throw new Error(ERROR_MESSAGE.EXCEED_FIVE_CHARACTORS);
    }
  }

  // 중복된 차 이름이 있다면 에러 발생
  static validateDuplicateCarName(carNames) {
    if (new Set(carNames).size !== Number(carNames.length)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_CAR_NAME);
    }
  }

  // 숫자를 입력하지 않았을 때
  static isNotNumber(input) {
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE.NO_NUMBER);
    }
  }

  //양의 정수를 입력하지 않았을 때 에러 발생
  static isNotPositiveInteger(input) {
    if (input % 1 !== 0 || input < 1) {
      throw new Error(ERROR_MESSAGE.NOT_POSITIVE_INTEGER);
    }
  }
}
export default ValidationUtil;
