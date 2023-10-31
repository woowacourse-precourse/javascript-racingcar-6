import { SYSTEM } from '../../constants/System.js';
import isValidDelimiter from './utils/is-valid-delimiter/index.js';
import isValidNameLength from './utils/is-valid-name-length/index.js';

const Validators = {
  checkRacingVehicleName(input) {
    const namesArray = Converter.splitStringToArrayByDelimiter(input, SYSTEM.delimiter);

    isValidDelimiter(input, SYSTEM.delimiter);
    isValidNameLength(namesArray);
  },
};

export default Validators;
