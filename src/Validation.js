import { ERROR } from './constants/Error.js';

export function validName(names) {
  for (const name of names) {
    if (name === '') {
      throw new Error(ERROR.NAME_NULL);
    }

    if (name.length > 5) {
      throw new Error(ERROR.NAME_LENGTH);
    }
  }
  if (new Set(names).size !== names.length) {
    throw new Error(ERROR.NAME_DUPLICATE);
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
