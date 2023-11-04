/**
 * 공백 문자 유무 검사
 * @param {string} str 검사 문자열
 * @returns {boolean}
 */
export const hasWhiteSpace = (str) => {
  return str.includes(' ');
};

/**
 * 문자열이 정수인지 검사
 * @param {string} str 검사 문자열
 * @returns {boolean}
 */
export const isInteger = (str) => {
  const num = Number(str);
  return Number.isInteger(num);
};

/**
 * 문자열이 숫자로만 이루어져 있는지 검사
 * @param {string} str 검사 문자열
 * @returns {boolean}
 */
export const isNumber = (str) => {
  return !isNaN(Number(str));
};
