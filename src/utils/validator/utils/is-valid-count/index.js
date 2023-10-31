import { SYSTEM } from '../../../../constants/System.js';

/**
 * @param {number} input
 * @returns {boolean}
 */
export default function isValidCount(input) {
  return input >= SYSTEM.racingCountMin && input <= SYSTEM.racingCountMax;
}
