/**
 * input 값이 다음 조건인지 확인후 null 혹은 숫자를 반환
 *  1. 숫자인지 확인
 *  2. 유효한 범위의 숫자인지 확인
 *
 * @param {string} input 사용자가 입력한 문자열
 * @returns
 */
export function parseValidNumber(input) {
  if (!isNumericString(input)) {
    return null;
  }
  const inputToNumber = parseInt(input);
  if (0 === inputToNumber || Number.MAX_SAFE_INTEGER < inputToNumber) {
    return null;
  }
  return inputToNumber;
}
const isNumericString = (value) => {
  return /^[0-9]+$/.test(value);
};
