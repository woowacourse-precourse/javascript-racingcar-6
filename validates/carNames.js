import { MESSAGE } from '../constants/message.js';

export const validateCarNames = (carNames) => {
  if (carNames.some((name) => name.length > 5)) {
    throw new Error(MESSAGE.ERROR_CAR_NAME_LENGTH_INPUT_WRONG);
  }

  const set = new Set(carNames);
  if (set.size !== carNames.length) {
    throw new Error(MESSAGE.ERROR_CAR_NAMES_DUPLICATION_INPUT_WRONG);
  }

  if (carNames.length === 1) {
    throw new Error(MESSAGE.ERROR_CAR_NAME_COMMA_INPUT_WRONG);
  }
};
