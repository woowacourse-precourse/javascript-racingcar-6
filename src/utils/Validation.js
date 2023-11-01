import { VALIDATION } from '../constants/MESSAGE';

const validateCarNames = (names) => {
  names.forEach((name) => {
    if (name.length > 5) throw new Error(VALIDATION.NAME_LENGTH);
  });
  if (names.length < 2) throw new Error(VALIDATION.CAR_COUNT);
};

const validateTryCount = (count) => {
  const tryCount = Number(count);

  if (isNaN(tryCount) || count.trim() === '')
    throw new Error(VALIDATION.TRY_COUNT);
};

export { validateCarNames, validateTryCount };
