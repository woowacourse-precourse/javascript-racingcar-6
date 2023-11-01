import errorMessages from '../constants/errorMessages';
import constants from '../constants/constants';

const validateCarName = (carNames) => {
  if (!Array.isArray(carNames)) throw new Error(errorMessages.NOT_ARRAY);

  if (!carNames.length) throw new Error(errorMessages.NO_CAR_NAMES);

  for (const carName of carNames) {
    if (carName.length > constants.MAX_LENGTH_CAR_NAME)
      throw new Error(errorMessages.NOT_IN_RANGE_NAME);
  }

  if (carNames.length !== new Set(carNames).size)
    throw new Error(errorMessages.DUPLICATE_CAR_NAMES);

  return true;
};

export default validateCarName;
