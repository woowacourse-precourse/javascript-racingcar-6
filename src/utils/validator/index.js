import { LANGUAGE_OPTION, SYSTEM } from '../../constants/System.js';
import Converter from '../StringConvertor.js';
import {
  isDuplication,
  isValidDelimiter,
  isValidLanguage,
  isValidNameLength,
  isValidQuantity,
} from './utils/index.js';

const Validators = {
  checkRacingVehicleName(input) {
    const namesArray = Converter.splitStringToArrayByDelimiter(input, SYSTEM.delimiter);

    isValidDelimiter(input, SYSTEM.delimiter);
    isValidNameLength(namesArray);
    isValidLanguage(namesArray, LANGUAGE_OPTION);
    isValidQuantity(namesArray);
    isDuplication(namesArray);
  },
};

export default Validators;
