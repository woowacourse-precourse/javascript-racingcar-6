import { ERROR_MESSAGE, VALID_LEN } from './constants';

const validateCarNames = names => {
  const carNames = names.split(',');
  const duplicateSet = new Set();

  if (carNames.length < VALID_LEN.MIN_CAR_NAME) {
    throw new Error(ERROR_MESSAGE.INVALID_CAR_LENGTH);
  }

  carNames.forEach(name => {
    if (name.length < VALID_LEN.MIN_NAME || name.length > VALID_LEN.MAX_NAME) {
      throw new Error(ERROR_MESSAGE.NAME_LENGTH);
    }

    if (duplicateSet.has(name)) {
      throw new Error(ERROR_MESSAGE.NAME_DUPLICATE);
    }
    duplicateSet.add(name);
  });
};

const validateTryCount = tryCount => {
  const numericTryCount = Number(tryCount);

  if (numericTryCount.toString() !== tryCount) {
    throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT_TYPE);
  }

  if (numericTryCount < VALID_LEN.MIN_RACE) {
    throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT_NUM);
  }

  if (!Number.isInteger(numericTryCount)) {
    throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT_TYPE);
  }
};

export { validateCarNames, validateTryCount };
