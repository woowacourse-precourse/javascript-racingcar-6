import { SYSTEM } from '../../constants/System.js';
import isValidDelimiter from './utils/is-valid-delimiter/index.js';
import isValidNameLength from './utils/is-valid-name-length/index.js';

const Validators = {
  checkRacingVehicleName(input) {
    isValidDelimiter(input, SYSTEM.delimiter);
    isValidNameLength(input);
  },
};

export default Validators;
