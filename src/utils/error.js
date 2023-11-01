//@ts-check

import { DEFAULT_ERROR_MESSAGE } from "./const.js";

export class InvalidPlayerNameError extends Error {
  static TYPE_LENGTH = 0;
  static TYPE_SPACE_BETWEEN = 1;
  static TYPE_CONTAINS_SPECIAL = 2;
  static TYPE_DUPLICATED = 3;

  /**
   * @param {number} errorType
   */
  constructor(errorType = -1) {
    super(InvalidPlayerNameError.#getMessage(errorType));
  }

  /**
   *
   * @param {number} type
   */
  static #getMessage(type) {
    if (type === InvalidPlayerNameError.TYPE_LENGTH) {
      return `${DEFAULT_ERROR_MESSAGE} 이름은 5자 이하로 설정해주세요.`;
    }

    if (type === InvalidPlayerNameError.TYPE_SPACE_BETWEEN) {
      return `${DEFAULT_ERROR_MESSAGE} 이름 사이에 공백이 있습니다.`;
    }

    if (type === InvalidPlayerNameError.TYPE_CONTAINS_SPECIAL) {
      return `${DEFAULT_ERROR_MESSAGE} 이름에 특수문자가 포함되어 있습니다.`;
    }

    if (type === InvalidPlayerNameError.TYPE_DUPLICATED) {
      return `${DEFAULT_ERROR_MESSAGE} 중복된 이름이 있습니다.`;
    }

    return DEFAULT_ERROR_MESSAGE;
  }
}

export class TryAmountError extends Error {
  static TYPE_NOT_INTEGER = 0;
  static TYPE_IS_SMALL_THAN_ONE = 1;

  /**
   * @param {number} errorType
   */
  constructor(errorType = -1) {
    super(TryAmountError.#getMessage(errorType));
  }

  /**
   *
   * @param {number} type
   */
  static #getMessage(type) {
    if (type === TryAmountError.TYPE_NOT_INTEGER) {
      return `${DEFAULT_ERROR_MESSAGE} 입력된 횟수가 유효하지 않은 형식입니다.`;
    }

    if (type === TryAmountError.TYPE_IS_SMALL_THAN_ONE) {
      return `${DEFAULT_ERROR_MESSAGE} 횟수가 1 보다 작습니다.`;
    }

    return DEFAULT_ERROR_MESSAGE;
  }
}

export class ReadLineError extends Error {
  constructor() {
    super(`${DEFAULT_ERROR_MESSAGE} 잘못된 입력 호출입니다.`);
  }
}
