import SYSTEM from '../../../../constants/System.js';
import Converter from '../../../StringConvertor.js';

/**
 *
 * @param {string} input
 * @returns {boolean}
 */
export default function isValidNameLength(input) {
  const names = Converter.splitStringToArrayByDelimiter(input, SYSTEM.delimiter);

  return names.every((name) => {
    return name.length >= SYSTEM.nameLengthMin && name.length <= SYSTEM.nameLengthMax;
  });
}
