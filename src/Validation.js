import { CAR, MESSAGE } from './Constants.js';

const Validation = {
  /**
   * 자동차 이름의 유효성 검사
   * @param {string} name 자동차 이름
  */
  validateCarName: (name) => {
    if (name.length < CAR.NAME_MIN_LENGTH || name.length > CAR.NAME_MAX_LENGTH) {
      throw new Error(MESSAGE.INVALID_CAR_NAME);
    }
  },
  /**
   * 자동차 이름의 중복 여부 검사
   * @param {string[]} names 자동차 이름들
   */
  validateDuplicateName: (names) => {
    const set = new Set(names);
    if (set.size !== names.length) {
      throw new Error(MESSAGE.DUPLICATE_CAR_NAME);
    }
  },

  /**
   * 시도 횟수가 자연수인지 검사
   * @param {number} count 시도 횟수
   */
  validateTryCount: (count) => {
    if (!Number.isInteger(parseFloat(count)) || count < 1) {
      throw new Error(MESSAGE.INVALID_TRY_COUNT);
    }
  },
}

export default Validation;