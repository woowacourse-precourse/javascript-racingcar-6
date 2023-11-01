import { SYSTEM } from '../../../../constants/System.js';

/**
 * @param {string[]} input
 * @returns {boolean}
 */
export default function isValidNameLength(input) {
  return input.every((name) => {
    return name.length >= SYSTEM.nameLengthMin && name.length <= SYSTEM.nameLengthMax;
  });
}
