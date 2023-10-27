import { ERROR } from '../constants.js';

const validation = (name) => {
  const nameArray = name.split(',');
  if (name.trim()) throw new Error(ERROR.EMPTY_CAR_NAME);
  if (nameArray.some((val) => val.trim() === ''))
    throw new Error(ERROR.INVALID_CAR_NAME);
  if (new Set(nameArray).size) throw new Error(ERROR.DUPLICATE_CAR_NAME);
  if (nameArray.some((val) => val.length >= 6))
    throw new Error(ERROR.OVER_CAR_NAME_LENGTH);
};
