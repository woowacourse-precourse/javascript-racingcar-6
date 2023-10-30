/**
 * @param {string} input
 * @param {string} delimiter
 * @returns {boolean}
 */
export default function isValidDelimiter(input, delimiter) {
  const delimiterRegExp = new RegExp(delimiter, 'g');
  return delimiterRegExp.test(input);
}
