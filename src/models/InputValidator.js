import { hasWhiteSpace, isInteger, isNumber } from '../utils/StringUtils.js';

export const InputValidator = {
  isValidCarName: (carName) => {
    // 공백 문자가 입력됐을 때
    if (carName === '') return false;

    // 6자리 이상이 입력됐을 때
    if (carName.length >= 6) return false;

    // 문자열에 whitespace가 있을 때
    if (hasWhiteSpace(carName)) return false;

    return true;
  },

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
