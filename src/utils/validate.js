import { RACING_ERROR } from '../constants/constants.js';

/**
 * 자동차 이름 유효성 검사 함수
 * @param {string} carName
 * @throws [ERROR] 메시지
 */
export function validateCarName(carName) {
  if (carName.length < RACING_ERROR.MIN_CAR_NAME)
    throw new Error(RACING_ERROR.NAME_EMPTY_ERROR);

  if (carName.length > RACING_ERROR.MAX_CAR_NAME) {
    throw new Error(RACING_ERROR.NAME_LENGTH_ERROR);
  }
}
