import { LANGUAGE_OPTION, SYSTEM } from '../../constants/System.js';
import Converter from '../StringConvertor.js';
import isValidLanguage from './utils/is-valid-Language/index.js';
import isValidDelimiter from './utils/is-valid-delimiter/index.js';
import isValidNameLength from './utils/is-valid-name-length/index.js';
import isValidQuantity from './utils/is-valid-quantity/index.js';

const Validators = {
  checkRacingVehicleName(input) {
    const namesArray = Converter.splitStringToArrayByDelimiter(input, SYSTEM.delimiter);

    isValidDelimiter(input, SYSTEM.delimiter);
    isValidNameLength(namesArray);
    isValidLanguage(namesArray, LANGUAGE_OPTION);
    isValidQuantity(namesArray);
  },
};

export default Validators;
