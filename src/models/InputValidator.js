import { hasWhiteSpace, isInteger, isNumber } from '../utils/StringUtils.js';

/**
 * 입력 유효성 검사 모델
 */
export const InputValidator = {
  /**
   * 자동차 이름 입력 유효성 검사
   * @param {string} carName 자동차 이름
   * @returns {boolean} 유효성 여부
   */
  isValidCarName: (carName) => {
    // 공백 문자가 입력됐을 때
    if (carName === '') return false;

    // 6자리 이상이 입력됐을 때
    if (carName.length >= 6) return false;

    // 문자열에 whitespace가 있을 때
    if (hasWhiteSpace(carName)) return false;

    return true;
  },

  /**
   * 시도 횟수 입력 유효성 검사
   * @param {string} num 시도 횟수
   * @returns {boolean} 유효성 여부
   */
  isValidAttemptNum: (num) => {
    // 공백 문자가 입력됐을 때
    if (num === '') return false;

    // 숫자가 아닌 문자가 포함되어 있을 때
    if (!isNumber(num)) return false;

    // 실수가 입력됐을 때
    if (!isInteger(num)) return false;

    // 0 이하의 정수가 입력됐을 때
    if (Number(num) <= 0) return false;

    return true;
  },
};
