import { MESSAGE, CAR_NAME_LIMIT } from '../constants.js';
import { stringToArray } from '../utils.js';

const conditions = {
  try: {
    isNotInput(input) {
      return Number(input) === 0;
    },
    isMinus(input) {
      return Number(input) < 0;
    },
    isNotNumber(input) {
      return !Number.isSafeInteger(Number(input));
    },
  },

  carNames: {
    isOverFive(inputs) {
      return stringToArray(inputs).some((input) => input.length > CAR_NAME_LIMIT);
    },

    isDuplicated(inputs) {
      console.log(stringToArray(inputs).length, new Set(stringToArray(inputs)).size);
      return stringToArray(inputs).length !== new Set(stringToArray(inputs)).size;
    },
  },
};

export const validate = {
  try(input) {
    const { isNotInput, isNotNumber, isMinus } = conditions.try;
    if (isNotInput(input)) {
      throw new Error(MESSAGE.TRY.ERROR.IS_NOT_INPUT);
    }
    if (isNotNumber(input)) throw new Error(MESSAGE.TRY.ERROR.IS_NOT_NUMBER);

    if (isMinus(input)) throw new Error(MESSAGE.TRY.ERROR.IS_MINUS);
  },

  carNames(inputs) {
    const { isOverFive, isDuplicated } = conditions.carNames;
    if (isOverFive(inputs)) {
      throw new Error(MESSAGE.CAR_NAME.ERROR.IS_OVER_FIVE);
    }

    if (isDuplicated(inputs)) {
      throw new Error(MESSAGE.CAR_NAME.ERROR.IS_DUPLICATED);
    }
  },
};
