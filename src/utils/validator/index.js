import { ERROR_MESSAGE, ERROR_MESSAGE_FUNCTION } from '../../constants/Messages.js';
import { LANGUAGE_OPTION, SYSTEM } from '../../constants/System.js';
import Converter from '../StringConvertor.js';
import ValidationError from '../error/ValidationError.js';
import {
  isDuplication,
  isValidDelimiter,
  isValidLanguage,
  isValidNameLength,
  isValidQuantity,
} from './utils/index.js';

const Validators = {
  checkRacingVehicleName(input) {
    const { delimiter, nameLengthMin, nameLengthMax, quantityMin, quantityMax } = SYSTEM;
    const { delimiterError, nameLength, language, quantity } = ERROR_MESSAGE_FUNCTION;
    const namesArray = Converter.splitStringToArrayByDelimiter(input, delimiter);

    if (!isValidDelimiter(input, delimiter)) {
      throw new ValidationError(delimiterError(delimiter));
    }
    if (!isValidNameLength(namesArray)) {
      throw new ValidationError(nameLength(nameLengthMin, nameLengthMax));
    }
    if (!isValidLanguage(namesArray, LANGUAGE_OPTION))
      throw new ValidationError(language(LANGUAGE_OPTION));
    if (!isValidQuantity(namesArray)) throw new ValidationError(quantity(quantityMin, quantityMax));
    if (isDuplication(namesArray)) throw new ValidationError(ERROR_MESSAGE.duplication);
  },
};

export default Validators;
