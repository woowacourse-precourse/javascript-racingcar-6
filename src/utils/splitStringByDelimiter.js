/**
 * 구분자를 기준으로 문자열을 나누는 함수
 * @param {string} inputString
 * @param {string} delimiter
 * @returns {string[]}
 */
const splitStringByDelimiter = (inputString, delimiter) =>
  inputString.split(delimiter).map((string) => string.trim())

export default splitStringByDelimiter
