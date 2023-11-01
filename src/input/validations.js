import { MESSAGE, CAR_NAME_LIMIT, TRY_MAX_VALUE } from '../constants.js';

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
    isOverMaxValue(input) {
      return Number(input) > TRY_MAX_VALUE;
    },
  },

  carNames: {
    isNotInput(inputs) {
      return Number(inputs[0]) === 0;
    },

    isOverFive(inputs) {
      return inputs.some((input) => input.length > CAR_NAME_LIMIT);
    },

    isDuplicated(inputs) {
      return inputs.length !== new Set(inputs).size;
    },

    isIncludeSpace(inputs) {
      return inputs.some((input) => Number(input) === 0);
    },
  },
};

export const validate = {
  /**
   * @param {string} input
   */
  try(input) {
    const { isNotInput, isNotNumber, isMinus, isOverMaxValue } = conditions.try;
    if (isNotInput(input)) {
      throw new Error(MESSAGE.COMMON.ERROR.IS_NOT_INPUT);
    }
    if (isOverMaxValue(input)) {
      throw new Error(MESSAGE.TRY.ERROR.IS_OVER_MAX_VALUE);
    }
    if (isNotNumber(input)) throw new Error(MESSAGE.TRY.ERROR.IS_NOT_NUMBER);

    if (isMinus(input)) throw new Error(MESSAGE.TRY.ERROR.IS_MINUS);
  },

  /**
   * @param {string[]} inputs
   */
  carNames(inputs) {
    const { isOverFive, isDuplicated, isNotInput, isIncludeSpace } = conditions.carNames;
    if (isNotInput(inputs)) {
      throw new Error(MESSAGE.COMMON.ERROR.IS_NOT_INPUT);
    }

    if (isIncludeSpace(inputs)) throw new Error(MESSAGE.CAR_NAME.ERROR.IS_INCLUDE_SPACE);

    if (isOverFive(inputs)) {
      throw new Error(MESSAGE.CAR_NAME.ERROR.IS_OVER_FIVE);
    }

    if (isDuplicated(inputs)) {
      throw new Error(MESSAGE.CAR_NAME.ERROR.IS_DUPLICATED);
    }
  },
};
