import { ERROR_MESSAGE, VALID_LEN } from './constants';

const validateNames = names => {
  const parsedNames = names.split(',');
  const duplicateCheck = new Set();

  if (parsedNames.length < VALID_LEN.MIN_CAR_NAME)
    throw new Error(ERROR_MESSAGE.INVALID_CAR_LENGTH);

  parsedNames.forEach(name => {
    if (name.length < VALID_LEN.MIN_NAME || name.length > VALID_LEN.MAX_NAME)
      throw new Error(ERROR_MESSAGE.NAME_LENGTH);

    if (duplicateCheck.has(name)) throw new Error(ERROR_MESSAGE.NAME_DUPLICATE);
    duplicateCheck.add(name);
  });
};

const validateTryCount = tryCount => {
  if (Number(tryCount).toString() !== tryCount)
    throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT_TYPE);
  if (Number(tryCount) < VALID_LEN.MIN_RACE)
    throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT_NUM);
  if (!Number.isInteger(Number(tryCount)))
    throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT_TYPE);
};

export { validateNames, validateTryCount };
