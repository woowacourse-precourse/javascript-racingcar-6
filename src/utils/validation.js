import MESSAGES from '../constants/Messages.js';
import REGEXP from '../constants/RegExp.js';

const isDuplicate = arr => {
  return arr.some((item, index) => index !== arr.lastIndexOf(item));
};

export const isValidInputVehicles = vehicles => {
  if (!vehicles) {
    throw new Error(MESSAGES.ERROR.EMPTY_INPUT);
  }
  if (!vehicles.match(REGEXP.VEHICLE.INPUT_CHARACTER_CHECK_REGEXP)) {
    throw new Error(MESSAGES.ERROR.INVALID_INPUT_CHARACTER_VEHICLES);
  }
  if (!vehicles.match(REGEXP.VEHICLE.INPUT_FORMAT_CHECK_REGEXP)) {
    throw new Error(MESSAGES.ERROR.INVALID_INPUT_FORMAT_VEHICLES);
  }
  if (!vehicles.match(REGEXP.VEHICLE.NAME_LENGTH_CHECK_REGEXP)) {
    throw new Error(MESSAGES.ERROR.EXCEED_LENGTH_VEHICLE_NAME);
  }
  if (!vehicles.match(REGEXP.VEHICLE.MINIMUM_VEHICLE_NUM_CHECK_REGEXP)) {
    throw new Error(MESSAGES.ERROR.TOO_FEW_VEHICLES);
  }
  if (isDuplicate(vehicles.split(','))) {
    throw new Error(MESSAGES.ERROR.DUPLICATE_VEHICLES_NAME);
  }
};

export const isValidInputRound = round => {
  if (!round) {
    throw new Error(MESSAGES.ERROR.EMPTY_INPUT);
  }
  if (!round.match(REGEXP.ROUND.INPUT_FORMAT_CHECK_REGEXP)) {
    throw new Error(MESSAGES.ERROR.INVALID_INPUT_FORMAT_ROUND);
  }
};
