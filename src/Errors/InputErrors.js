import {
  NAME_MAX,
  NAME_MIN,
  IS_EMPTY_ERROR,
  VALIDATE_CAR_NAME_ERROR,
} from '../Utils/Define';

export const isEmpty = (input) => {
  if (input.trim() === '') {
    return IS_EMPTY_ERROR;
  }
  return null;
};

export const validateCarName = (input) => {
  if (input.length < NAME_MIN || input.length > NAME_MAX) {
    return VALIDATE_CAR_NAME_ERROR;
  }
  return null;
};
