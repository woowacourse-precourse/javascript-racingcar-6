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

/**
 * input 값이 separator로 구분된 올바른 값인지 확인 후 null 혹은 문자열 배열을 반환
 * 1. 올바른 구분자로 구분이 되
 * @param {string} inputCarNames
 * @param {string} separator
 * @returns
 */
export function parseValidCarNames(input, separator) {
  let carNameList = input.trim().split(separator);
  for (let i = 0; i < carNameList.length; i++) {
    carNameList[i] = carNameList[i].trim();
    if (carNameList[i] === "") return null;
    if (5 < carNameList[i].length) return null;
  }
  if (carNameList.length <= 1) return null;
  return carNameList;
}
