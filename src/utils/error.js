//@ts-check

const DEFAULT_ERROR_MESSAGE = "[ERROR]";

class InvalidPlayerNameError extends Error {
  static TYPE_LENGTH = 0;
  static TYPE_SPACE_BETWEEN = 1;
  static TYPE_CONTAINS_SPECIAL = 2;

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

    return DEFAULT_ERROR_MESSAGE;
  }
}
