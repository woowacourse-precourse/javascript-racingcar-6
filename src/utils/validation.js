import MESSAGES from '../constants/Messages.js';
import REGEXP from '../constants/RegExp.js';

const isDuplicate = arr => {
  return arr.some((item, index) => index !== arr.lastIndexOf(item));
};

export const validateInputVehicles = vehicles => {
  if (!vehicles.match(REGEXP.VEHICLE.INPUT_CHARACTER_CHECK_REGEXP)) {
    throw new Error(MESSAGES.ERROR.INVALID_INPUT_CHARACTER_VEHICLES);
  }
  if (!vehicles.match(REGEXP.VEHICLE.INPUT_FORMAT_CHECK_REGEXP)) {
    throw new Error(MESSAGES.ERROR.INVALID_INPUT_FORMAT_VEHICLES);
  }
  if (!vehicles.match(REGEXP.VEHICLE.NAME_LENGTH_CHECK_REGEXP)) {
    throw new Error(MESSAGES.ERROR.LENGTH_EXCEED_VEHICLE_NAME);
  }
  if (!vehicles.match(REGEXP.VEHICLE.MINIMUM_VEHICLE_NUM_CHECK_REGEXP)) {
    throw new Error(MESSAGES.ERROR.TOO_FEW_VEHICLES);
  }
  if (isDuplicate(vehicles.split(','))) {
    throw new Error(MESSAGES.ERROR.DUPLICATE_VEHICLES_NAME);
  }
};
