import { SET_MAXIMUM_CAR_LENGTH } from './constants';

const isNumericString = (value) => /^[0-9]+$/.test(value);

/**
 * input 값이 다음 조건인지 확인후 null 혹은 숫자를 반환
 *  1. 숫자로 이루어졌는지 확인
 *  2. 유효한 범위의 숫자인지 확인
 *
 * @param {string} input 사용자가 입력한 문자열
 * @returns
 */
export function parseValidNumber(input) {
  if (!isNumericString(input)) {
    return null;
  }
  const inputToNumber = parseInt(input, 10);
  if (inputToNumber === 0 || Number.MAX_SAFE_INTEGER < inputToNumber) {
    return null;
  }
  return inputToNumber;
}

/**
 * input 값이 다음 내용 조건에 맞는지 확인 후 null 혹은 문자열 배열을 반환
 *  1. name의 길이가 {SET_MAXIMUM_CAR_LENGTH} 이하인지 확인
 *  2. 연속된 {separator}로 이루어져 있지 않은지 확인
 *  3. {separator}로 시작하거나, 끝나는지 확인
 *
 * @param {string} inputCarNames
 * @param {string} separator
 * @returns
 */
export async function parseValidCarNames(input, separator) {
  const carNameList = input.trim().split(separator);
  for (let i = 0; i < carNameList.length; i += 1) {
    carNameList[i] = carNameList[i].trim();
    if (carNameList[i] === '') return null;

    if (SET_MAXIMUM_CAR_LENGTH < carNameList[i].length) return null;
  }
  if (carNameList.length < 1) return null;

  return carNameList;
}
