import { SYSTEM } from '../../../../constants/System.js';

/**
 * @param {string[]} input
 * @returns {boolean}
 */
export default function isValidQuantity(input) {
  return input.length >= SYSTEM.quantityMin && input.length <= SYSTEM.quantityMax;
}
