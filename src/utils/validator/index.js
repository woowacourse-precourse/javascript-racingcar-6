import { ERROR_MESSAGE, ERROR_MESSAGE_FUNCTION } from '../../constants/Messages.js';
import { LANGUAGE_OPTION, SYSTEM } from '../../constants/System.js';
import Converter from '../StringConvertor.js';
import ValidationError from '../error/ValidationError.js';
import {
  isDuplication,
  isValidCount,
  isValidDelimiter,
  isValidNameLength,
  isValidQuantity,
} from './utils/index.js';
import isValidMinMax from './utils/is-valid-min-max/index.js';

const Validators = {
  /**
   * @param {string} input
   */
  checkRacingVehicleName(input) {
    const { delimiter, nameLengthMin, nameLengthMax, quantityMin, quantityMax } = SYSTEM;
    const { delimiterError, nameLength, quantity } = ERROR_MESSAGE_FUNCTION;
    const namesArray = Converter.splitStringToArrayByDelimiter(input, delimiter);

    if (!isValidDelimiter(input, delimiter)) {
      throw new ValidationError(delimiterError(delimiter));
    }
    if (!isValidNameLength(namesArray)) {
      throw new ValidationError(nameLength(nameLengthMin, nameLengthMax));
    }

    if (!isValidQuantity(namesArray)) throw new ValidationError(quantity(quantityMin, quantityMax));
    if (isDuplication(namesArray)) throw new ValidationError(ERROR_MESSAGE.duplication);
  },

  /**
   * @param {number} input
   */
  checkRacingCount(input) {
    if (!isValidCount(input)) {
      throw new ValidationError(
        ERROR_MESSAGE_FUNCTION.racingCount(SYSTEM.racingCountMin, SYSTEM.racingCountMax),
      );
    }
  },

  /**
   * @param {number} input
   * @param {number} min
   * @param {number} max
   */
  checkRandomNumber(input, min, max) {
    if (!isValidMinMax(input, min, max)) {
      throw new ValidationError(ERROR_MESSAGE_FUNCTION.randomNumber(min, max));
    }
  },
};

export default Validators;
