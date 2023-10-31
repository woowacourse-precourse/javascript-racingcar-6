import { ERROR_MESSAGE } from '../constant/message';
import LIMIT from '../constant/limit';

class Validator {
  static emptyInput(names) {
    if (names.trim() === '') {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  static specialCharactor(names) {
    // 영 대,소문자 / 한글 / 숫자 / 콤마 / 공백만 입력되었는지 확인하는 정규표현식
    if (!/^[a-zA-Z가-힣0-9, ]*$/.test(names)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  static overTwoNames(names) {
    if (!names.includes(',')) {
      throw new Error(ERROR_MESSAGE.LESS_TWO_NAME);
    }
  }

  static nameLength(names) {
    names.split(',').forEach((carName) => {
      if (carName.trim().length > LIMIT.CAR_NAME_LENGTH) {
        throw new Error(ERROR_MESSAGE.OVER_LENGTH_NAME);
      }
    });
  }

  static overMaximumCars(names) {
    if (names.split(',').length > LIMIT.MAXIMUM_CARS) {
      throw new Error(ERROR_MESSAGE.OVER_MAXIMUM_CARS);
    }
  }

  static carsNameInput(names) {
    this.emptyInput(names);
    this.specialCharactor(names);
    this.overTwoNames(names);
    this.nameLength(names);
    this.overMaximumCars(names);
  }

  static isNumber(input) {
    if (!Number(input)) {
      throw new Error(ERROR_MESSAGE.IS_NOT_NUMBER);
    }
  }

  static lessThanOne(input) {
    if (Number(input) <= 0) {
      throw new Error(ERROR_MESSAGE.LESS_THAN_ONE);
    }
  }

  static isInteger(input) {
    // 입력이 정수인지 소수점을 버린 수와 숫자로 변환한 수를 비교
    if (Math.floor(input) !== Number(input)) {
      throw new Error(ERROR_MESSAGE.IS_NOT_INTEGER);
    }
  }

  static overTryTime(input) {
    if (Number(input) > LIMIT.TRY_TIME) {
      throw new Error(ERROR_MESSAGE.OVER_TRY_TIME);
    }
  }

  static tryTimeInput(input) {
    this.isNumber(input);
    this.lessThanOne(input);
    this.isInteger(input);
    this.overTryTime(input);
  }
}

export default Validator;
