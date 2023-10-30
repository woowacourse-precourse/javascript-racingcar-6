import SYSTEM from '../../constants/System.js';
import isValidDelimiter from './utils/is-valid-delimiter/index.js';

const Validators = {
  checkRacingVehicleName(input) {
    isValidDelimiter(input, SYSTEM.delimiter);
  },
};

export default Validators;
