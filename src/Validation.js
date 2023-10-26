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
}

export default Validation;