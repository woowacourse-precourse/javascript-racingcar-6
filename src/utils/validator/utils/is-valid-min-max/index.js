/**
 * @param {number} input
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
export default function isValidMinMax(input, min, max) {
  return input >= min && input <= max;
}
