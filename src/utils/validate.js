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

/**
 * 자동차 이름 중복 검사 함수
 * @param {Array} carList
 * @throws [ERROR] 메시지
 */
export function validateNameDuplicate(carList) {
  const carSet = new Set(carList);
  if (carSet.size !== carList.length) {
    throw new Error(RACING_ERROR.NAME_DUPLICATE);
  }
}

/**
 * 이동 횟수 유효성 검사 함수
 * @param {number} count
 * @throws [ERROR] 메시지
 */
export function validateMoveCount(count) {
  if (isNaN(count)) throw new Error(RACING_ERROR.MOVE_COUNT_ONLY_NUMBER);
  if (count < 1) throw new Error(RACING_ERROR.MOVE_COUNT_POSITIVE_NUMBER);
}
