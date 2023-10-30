import { ERROR } from './constants/Error.js';

export function validName(name) {
  if (name === '') {
    throw new Error(ERROR.NAME_NULL);
  }
  const carNames = name.split(',').map((name) => name.trim());
  for (const carName of carNames) {
    if (carName.length > 5) {
      throw new Error(ERROR.NAME_LENGTH);
    }
  }
}

export function validTryCount(tryCount) {
  if (tryCount === '') {
    throw new Error(ERROR.TRY_COUNT_NULL);
  }
  if (isNaN(tryCount)) {
    throw new Error(ERROR.TRY_COUNT_NAN);
  }
}
