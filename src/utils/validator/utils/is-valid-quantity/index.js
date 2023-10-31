/**
 * @param {string[]} input
 * @returns {boolean}
 */
export default function isValidQuantity(input) {
  return input.length >= 2 && input.length <= 6;
}
